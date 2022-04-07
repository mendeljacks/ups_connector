export type post_ship_v_1_freight_pickups_type = any
export const post_ship_v_1_freight_pickups = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_ship_v_1_freight_pickups_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/freight/pickups`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}