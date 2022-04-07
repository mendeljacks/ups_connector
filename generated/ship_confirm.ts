export type post_ship_type = any
export const post_ship = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_ship_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/Ship`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}