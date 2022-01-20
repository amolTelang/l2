import axios from 'axios'
import {sendOrderDetails} from './types'

export const sendOrder=(partnerDetails,price,noOfBags)=>dispatch=>{
    const finalData={...partnerDetails}
    finalData.price=price;
    finalData.noOfBags=noOfBags;
    finalData.placed="true";
    console.log(finalData);
    try {
        dispatch({
            type:sendOrderDetails,
            payload:finalData
        })
    } catch (error) {
        console.log(error.message);
    }
}