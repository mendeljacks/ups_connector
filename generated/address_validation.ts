export type post_av_type = any
export const post_av = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_av_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/AV`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}