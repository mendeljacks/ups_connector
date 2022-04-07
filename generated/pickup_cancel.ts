export type post_ship_v_1_pickups_cancelby_type = any
export const post_ship_v_1_pickups_cancelby = async (
    base_url: string, 
    token: string, 
    path: {cancelby: undefined},  
    axios: Function
): Promise<{data: post_ship_v_1_pickups_cancelby_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/pickups/${path.cancelby}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}