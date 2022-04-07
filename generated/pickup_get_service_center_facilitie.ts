export type post_ship_v_1_pickup_servicecenterlocations_type = any
export const post_ship_v_1_pickup_servicecenterlocations = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_ship_v_1_pickup_servicecenterlocations_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/pickup/servicecenterlocations`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}