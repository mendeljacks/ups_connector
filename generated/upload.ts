export type post_paperless_document_api_type = any
export const post_paperless_document_api = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_paperless_document_api_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/PaperlessDocumentAPI`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}