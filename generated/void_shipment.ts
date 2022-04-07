export type post_ship_v_1_shipments_cancel_shipmentidentificationnumber_type = any
export const post_ship_v_1_shipments_cancel_shipmentidentificationnumber = async (
    base_url: string, 
    token: string, 
    path: {shipmentidentificationnumber: undefined},  
    query: {trackingnumber?: undefined},
    axios: Function
): Promise<{data: post_ship_v_1_shipments_cancel_shipmentidentificationnumber_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/shipments/cancel/${path.shipmentidentificationnumber}`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}