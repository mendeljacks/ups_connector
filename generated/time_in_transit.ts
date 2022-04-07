export type post_time_in_transit_type = any
export const post_time_in_transit = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_time_in_transit_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/TimeInTransit`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}