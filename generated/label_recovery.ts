export type post_lbrecovery_type = any
export const post_lbrecovery = async (
    base_url: string, 
    token: string, 
    path: {version: undefined},  
    axios: Function
): Promise<{data: post_lbrecovery_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/LBRecovery`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}