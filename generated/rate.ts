export type post_ship_version_rating_requestoption_type = any
export const post_ship_version_rating_requestoption = async (
    base_url: string, 
    token: string, 
    path: {version: undefined,requestoption: undefined},  
    query: {additionalinfo: undefined},
    axios: Function
): Promise<{data: post_ship_version_rating_requestoption_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/rating/${path.requestoption}`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}