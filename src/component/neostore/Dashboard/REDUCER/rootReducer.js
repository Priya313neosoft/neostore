import { combineReducers } from 'redux';
import cartReducer from './cart-module.reducer';
const rootreducer=combineReducers({
 totcart:cartReducer

});
export default rootreducer;

