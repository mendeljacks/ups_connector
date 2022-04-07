// Docs: https://www.ups.com/upsdeveloperkit?loc=en_CA > open api
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { route_to_fn_name } from './helpers/route_to_fn_name'
import { sanitize_route_str } from './helpers/sanitize_route_name'
import { to_typescript_type } from './helpers/to_typescript_type'

export const generate = () => {
    const routes_directory = 'schemas'
    const generated_client_filename = 'generated'

    const file_names = readdirSync(routes_directory).slice(24, 25)
    const files = file_names
        .map(file_name => readFileSync(`${routes_directory}/${file_name}`, 'utf8'))
        .map(el => JSON.parse(el))

    const typescripts = files.map((file, i) => open_api_to_typescript(file, file_names[i]))

    typescripts.map((output, i) =>
        writeFileSync(`generated/${file_names[i].slice(0, -5)}.ts`, output.join('\n'))
    )
}

const open_api_to_typescript = (s, file_name) => {
    const output = Object.keys(s.paths).flatMap(route_str => {
        const route = s.paths[route_str]
        return Object.keys(route).map(method => {
            const fn_name = `${method}${route_to_fn_name(route_str)}`
            const meth = route[method]
            const parameters = meth.parameters || []
            const responses = meth.responses
            const $ref =
                responses?.['200']?.content?.['application/json']?.schema?.$ref.split(
                    '#/components/schemas/'
                )[1]
            const response_definition = $ref
                ? to_typescript_type(s.components.schemas[$ref], s)
                : 'any'

            const body = meth?.requestBody
            const body_json = body.content['application/json']
            const pth = parameters.filter(el => el.in === 'path')
            const query = parameters.filter(el => el.in === 'query')

            const query_type = query.map(
                el =>
                    `${el.name.split('.')[el.name.split('.').length - 1]}${
                        el.required ? '' : '?'
                    }: ${to_typescript_type(el, s)}`
            )
            const path_type = pth.map(el => `${el.name}: ${to_typescript_type(el, s)}`)
            const body_type = to_typescript_type(body_json.schema, s)

            const output = `export type ${fn_name + '_type'} = ${response_definition}
/** 
 * ${s.info.description}
 * ${meth.summary}
 * @example ${JSON.stringify(body_json.examples.json.value)}
*/
export const ${fn_name} = async (
    base_url: string, 
    token: string, ${
        pth.length > 0
            ? `
    path: {${path_type}},`
            : ``
    } ${
                body.length > 0
                    ? `
    body: ${body_type},`
                    : ``
            } ${
                query.length > 0
                    ? `
    query: {${query_type}},`
                    : ``
            }
    axios: Function
): Promise<{data: ${fn_name + '_type'}}> => {
    return axios({
        method: '${method.toUpperCase()}', 
        url: \`${`\${base_url}${sanitize_route_str(route_str)}`}\`,
        headers: { Authorization: \`Bearer \${ token }\` },${
            query.length > 0
                ? `
        params: query,`
                : ''
        }${
                body.length > 0
                    ? `
        data: body,`
                    : ''
            }
    })
}`
            return output
        })
    })

    return output
}
