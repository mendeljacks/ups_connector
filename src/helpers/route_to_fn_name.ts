export const route_to_fn_name = route_str => {
    let fn_name = ''

    for (let i = 0; i < route_str.length; i++) {
        const char = route_str[i]
        if (['/'].includes(char)) fn_name = fn_name + '_'
        if (!['{', '}', '/'].includes(char)) {
            if (
                char.toUpperCase() === char &&
                route_str[i - 1].toUpperCase() !== route_str[i - 1]
            ) {
                fn_name = fn_name + '_'
            }
            fn_name = fn_name + char.toLowerCase()
        }
    }
    return fn_name
}
