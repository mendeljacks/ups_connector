export type post_dangerousgoods_version_chemicalreferencedata_type = any
export const post_dangerousgoods_version_chemicalreferencedata = async (
    base_url: string, 
    token: string, 
    path: {version: undefined},  
    axios: Function
): Promise<{data: post_dangerousgoods_version_chemicalreferencedata_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/dangerousgoods/${path.version}/chemicalreferencedata`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}