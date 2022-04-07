export type post_dangerousgoods_v_1_acceptanceauditprecheck_type = any
export const post_dangerousgoods_v_1_acceptanceauditprecheck = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_dangerousgoods_v_1_acceptanceauditprecheck_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/dangerousgoods/v1/acceptanceauditprecheck`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}