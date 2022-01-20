import axios from 'axios';
import{
    loadPartnerData
} from './types';

export const sendPartnerData=(dataObject)=>async dispatch=>{   
    try {
        dispatch({
            type:loadPartnerData,
            payload:dataObject.properties

        })
    } catch (error) {
        console.log(error.message);
    }
}

