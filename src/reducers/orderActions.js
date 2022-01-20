import{
    sendOrderDetails
} from '../actions/types'

const initialState={
    Name:"Nuggikeri Temple",
    Address:"Nuggikeri Hunuman Temple Rd",
    img:"https://picsum.photos/seed/picsum/200/300",
    Available:"Yes",
    price:"1",
    noOfBags:"1",
    placed:"false"
}

function sendOrderReducer(state=initialState,action){
    const{type,payload}=action;

    switch(type){
        case sendOrderDetails:
            return{
                ...state,
                Name:payload.Name,
                Address:payload.Address,
                img:payload.img,
                Available:payload.AVAILABLE,
                price:payload.price,
                noOfBags:payload.noOfBags,
                placed:payload.placed,
            }
        default:return  state;
    }
}
export default sendOrderReducer;