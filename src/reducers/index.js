import { combineReducers } from 'redux';
import place from './homeActions';
import map from './mapActions';
import selectedPartner from './listActions'
import orderDetails from './orderActions'
export default combineReducers({
place,
map,
selectedPartner,
orderDetails
});