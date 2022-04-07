export type post_ship_version_freight_rating_requestoption_type = any
export const post_ship_version_freight_rating_requestoption = async (
    base_url: string, 
    token: string, 
    path: {version: undefined,requestoption: undefined},  
    axios: Function
): Promise<{data: post_ship_version_freight_rating_requestoption_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/freight/rating/${path.requestoption}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}