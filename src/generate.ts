// Docs: https://www.ups.com/upsdeveloperkit?loc=en_CA > open api
import { readdirSync, readFileSync, writeFileSync } from 'fs'
import { route_to_fn_name } from './helpers/route_to_fn_name'
import { sanitize_route_str } from './helpers/sanitize_route_name'
import { to_typescript_type } from './helpers/to_typescript_type'

export const generate = () => {
    const routes_directory = 'schemas'
    const generated_client_filename = 'src/index.ts'

    const file_names = readdirSync(routes_directory)
    const files = file_names
        .map(file_name => readFileSync(`${routes_directory}/${file_name}`, 'utf8'))
        .map(el => JSON.parse(el))

    const typescripts = files.map((file, i) => open_api_to_typescript(file, file_names[i]))

    writeFileSync(generated_client_filename, typescripts.join('\n'))
}

const open_api_to_typescript = (s, file_name) => {
    const output = Object.keys(s.paths).flatMap(route_str => {
        const route = s.paths[route_str]
        return Object.keys(route).map(method => {
            const operation_id = route[method].operationId
            const fn_name = `${method}${route_to_fn_name(operation_id)}`
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
 * @example ${JSON.stringify(body_json.examples?.json.value)}
*/
export const ${fn_name} = async (
    base_url: string, 
    auth: {
        username: string,
        password: string,
        access_key: string
    }, ${
        pth.length > 0
            ? `
    path: {${path_type}},`
            : ``
    } ${
                !!body_type
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
        headers: { AccessLicenseNumber: auth.access_key, Password: auth.password, 'Content-Type': 'application/json', Username: auth.username, Accept: 'application/json' },${
            query.length > 0
                ? `
        params: query,`
                : ''
        }${
                !!body_type
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
