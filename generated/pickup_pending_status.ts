export type post_ship_v_1_pickups_pickuptype_type = any
export const post_ship_v_1_pickups_pickuptype = async (
    base_url: string, 
    token: string, 
    path: {pickuptype: undefined},  
    axios: Function
): Promise<{data: post_ship_v_1_pickups_pickuptype_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/pickups/${path.pickuptype}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}