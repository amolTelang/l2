import {
    sendSelectedPartnerDetails
} from '../actions/types'

const initialState={
    Name:"Nuggikeri Temple",
    Address:"Nuggikeri Hunuman Temple Rd",
    img:"https://picsum.photos/seed/picsum/200/300",
    Available:"Yes"
}

function listReducer(state=initialState,action){
    const{type,payload}=action;

    switch(type){
        case sendSelectedPartnerDetails:
            return{
                ...state,
                Name:payload.Name,
                Address:payload.Address,
                img:payload.img,
                Available:payload.Available
            }
        default:return  state;
    }
}
export default listReducer;