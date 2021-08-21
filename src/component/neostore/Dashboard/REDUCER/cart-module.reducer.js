import {ADD_TO_CART,GET_TO_CART,UPDATE_TO_CART,REMOVE_FROM_PRODUCT, INCREASE_PRODUCT, DECREASE_PRODUCT} from "../CONSTANT/cart-module.constant"
const INITIAL_STATE={
    cartreddata:[]

}
const cartReducer=(state=INITIAL_STATE,action)=>{
    console.log(action.payload);
    console.log(state);
    console.log(action);
    switch(action.type){
        case GET_TO_CART:
        return{
            ...state,
            cartreddata:action.payload
        }
        default:
            return state;
    }

}
export default cartReducer;