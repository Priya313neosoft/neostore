import { combineReducers } from 'redux';
import cartReducer from './cart-module.reducer';
import dashboardReducer from './dashboard.reducer';
const rootreducer=combineReducers({
 totcart:cartReducer,
 totdashboard:dashboardReducer

});
export default rootreducer;

