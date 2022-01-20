
import{
    sendSelectedPartnerDetails
} from './types'

export const sendSelectedPartnerData=(formData)=>dispatch=>{
    try {
        dispatch({
            type:sendSelectedPartnerDetails,
            payload:formData

        })
    } catch (error) {
        console.log(error.message);
    }
}