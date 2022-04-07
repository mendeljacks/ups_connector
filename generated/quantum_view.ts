export type post_qvevents_type = any
export const post_qvevents = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_qvevents_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/QVEvents`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}