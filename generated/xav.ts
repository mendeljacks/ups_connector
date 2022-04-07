export type post_addressvalidation_v_1_requestoption_type = any
export const post_addressvalidation_v_1_requestoption = async (
    base_url: string, 
    token: string, 
    path: {requestoption: undefined},  
    query: {regionalrequestindicator?: undefined,maximumcandidatelistsize?: undefined},
    axios: Function
): Promise<{data: post_addressvalidation_v_1_requestoption_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/addressvalidation/v1/${path.requestoption}`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}