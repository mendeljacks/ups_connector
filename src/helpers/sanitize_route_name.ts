export const sanitize_route_str = str => {
    let sanitized = ''
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === '{') {
            sanitized = sanitized + `\${path.`
        } else {
            sanitized = sanitized + char
        }
    }
    return sanitized
}
