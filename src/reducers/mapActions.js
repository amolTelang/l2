import {
    loadPartnerData
} from '../actions/types'

const initialState={
    Name:"Nuggikeri Temple",
    Address:"Nuggikeri Hunuman Temple Rd",
    img:"https://lh5.googleusercontent.com/p/AF1QipOGK1nxk0skgCOfr0rE736PjMM8rZlsTRqutlVq=s451-k-no",
    Available:"Yes"
}

function partnerReducer(state=initialState,action){
    const{type,payload}=action;

    switch(type){
        case loadPartnerData:
            return{
                ...state,
                Name:payload.NAME,
                Address:payload.ADDRESS,
                img:payload.img,
                Available:payload.AVAILABLE
            }
        default:return  state;
    }
}
export default partnerReducer;