import React, { createContext } from 'react';
import Contextcart from './Contextcart';
import {reducer} from "./reducer";
export const CartContext=createContext();
const initialState={
    item:products,
    totalAmount:0,
    totalItem:0,
}
const cart=() =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const removeItem=(id)=>{
        return dispatch({
            type:"REMOVE_ITEM",
            payload:id,
        })
    }   
    const clearCart=()=>{
        return dispatch({
            type:"CLEAR_ITEM"
        }) 
   
    }   
    const increament=(id)=>{
        return dispatch({
            type:"INCREAMENT",
            payload:id
            
        }) 

    }
    const decreament=(id)=>{
        return dispatch({
            type:"DECREAMENT",
            payload:id
        })
    }
    return (
        <>
        <Contextcart/>
            
        </>
    )
}

export default cart
