export const snake_case = word => {
    let arr = word.split('')
    let new_arr = arr.map((char, i) => {
        if (char.match(/[A-Z]/)) {
            const prefix = !arr[i - 1]?.match(/[A-Z_]/) ? '_' : ''

            return prefix + char.toLowerCase()
        }
        return char
    })
    return new_arr.join('')
}
