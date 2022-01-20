
import{
    sendPlaceName,
} from '../actions/types'

const initialState={
    place:'Dharwad',
}

function placeReducer(state=initialState,action){
    const{type,payload}=action;

    switch(type){
        case sendPlaceName:
            return{
                ...state,
                place:payload,
            }
            default:
                return state;
    }
}
export default placeReducer;