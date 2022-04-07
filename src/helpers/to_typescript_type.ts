export const to_typescript_type = (el, s) => {
    if (el.type === 'integer') return 'number'

    if (el.schema?.type === 'string') {
        return el.enum ? el.enum.map(el => `'${el}'`).join(' | ') : 'string'
    }

    if (el.type === 'object') {
        const type = Object.keys(el.properties || {}).reduce((acc, val) => {
            let subtype = el.properties[val]
            acc =
                acc +
                `${val.startsWith('.') ? `'${val}'` : val}${
                    el.required?.includes(val) ? '' : '?'
                }: ${to_typescript_type(subtype, s)}, `
            return acc
        }, ``)
        return `{${type}}`
    }

    if (el.$ref) {
        const lookup = s.components.schemas[el.$ref.replace('#/components/schemas/', '')]
        return to_typescript_type(lookup, s)
    }

    if (el.type === 'array') {
        debugger
        // if (!el.items['$ref']) {
        //     return `Array<${to_typescript_type(el.items)}>`
        // }

        // const items = s.definitions[el.items['$ref']?.slice(14, Infinity)]
        // return `Array<${to_typescript_type(items)}>`
    }

    return el.type
}
