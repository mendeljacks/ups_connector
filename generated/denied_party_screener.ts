export type post_tradeability_v_1_restrictedparties_type = any
export const post_tradeability_v_1_restrictedparties = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_tradeability_v_1_restrictedparties_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/tradeability/v1/restrictedparties`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}