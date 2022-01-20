// import api from '../utils/api.js';
import axios from 'axios';
import {
    sendPlaceName,
} from './types';


export const sendData=(place)=>async dispatch=>{
    
    try {
        dispatch({
            type:sendPlaceName,
            payload:place
        });

    } catch (error) {
        console.log(error.message);
    }
}