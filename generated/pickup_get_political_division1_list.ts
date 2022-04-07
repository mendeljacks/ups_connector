export type post_ship_v_1_pickup_countries_countrycode_type = any
export const post_ship_v_1_pickup_countries_countrycode = async (
    base_url: string, 
    token: string, 
    path: {countrycode: undefined},  
    axios: Function
): Promise<{data: post_ship_v_1_pickup_countries_countrycode_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/pickup/countries/${path.countrycode}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}