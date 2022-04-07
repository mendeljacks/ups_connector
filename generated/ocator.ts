export type post_locator_type = any
export const post_locator = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_locator_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/Locator`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}