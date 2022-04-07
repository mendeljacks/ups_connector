export type post_tradeability_v_1_landedcost_queries_type = any
export const post_tradeability_v_1_landedcost_queries = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_tradeability_v_1_landedcost_queries_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/tradeability/v1/landedcost/queries`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}