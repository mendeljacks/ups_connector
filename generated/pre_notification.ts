export type post_dangerousgoods_v_1_prenotification_type = any
export const post_dangerousgoods_v_1_prenotification = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_dangerousgoods_v_1_prenotification_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/dangerousgoods/v1/prenotification`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}