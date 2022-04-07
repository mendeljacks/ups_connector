export type post_ship_version_pickups_type = any
export const post_ship_version_pickups = async (
    base_url: string, 
    token: string, 
    path: {version: undefined},  
    axios: Function
): Promise<{data: post_ship_version_pickups_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/pickups`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}