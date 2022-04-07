export type post_track_v_1_details_inquiry_number_type = any
export const post_track_v_1_details_inquiry_number = async (
    base_url: string, 
    token: string, 
    path: {inquiryNumber: undefined},  
    query: {locale?: undefined},
    axios: Function
): Promise<{data: post_track_v_1_details_inquiry_number_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/track/v1/details/${path.inquiryNumber}`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}