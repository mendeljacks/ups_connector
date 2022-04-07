export type post_ship_version_pickups_rating_type = any
export const post_ship_version_pickups_rating = async (
    base_url: string, 
    token: string, 
    path: {version: undefined},  
    axios: Function
): Promise<{data: post_ship_version_pickups_rating_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/pickups/rating`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}