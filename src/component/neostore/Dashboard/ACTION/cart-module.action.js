import axios from "axios";
import {ADD_TO_CART,GET_TO_CART,UPDATE_TO_CART,REMOVE_FROM_PRODUCT,INCREASE_PRODUCT, DECREASE_PRODUCT} from "../CONSTANT/cart-module.constant"
export function gettocard() {
  return (dispatch) => {
    var config = {
        method: "get",
        url: "https://neostore-api.herokuapp.com/api/cart",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
        },
      };
      axios(config).then(function (response) {
        //  console.log(JSON.stringify(response.data.data));
         const cartdata2=response.data.data
         console.log(cartdata2,)
        const cartdata = cartdata2.products.map((item1)=>{
            return{
                ...item1,
            };
        });
        console.log(cartdata);
        dispatch(gettocartdata(cartdata));
       
      });
  };
}
// export function addtocart(){
//     return(dispatch)=>{

//     }
// }
// export function updatecart(){
//   return(dispatch)=>{

//   }
// }
// export function removecart(){
//   return(dispatch)=>{

//   }
// }
// export function increasequantity(){
//   return(dispatch)=>{

//   }
// }
// export function decreasequantity(){
//   return(dispatch)=>{

//   }
// }
// reducers
export const gettocartdata=(data)=>(
  {
  
    type:GET_TO_CART,
    payload:data
})

// export const addtocartdata=()=>({
//   type:ADD_TO_CART,
//   payload:data
// })
// export const updatetocartdata=()=>({
//   type:UPDATE_TO_CART,
//   payload:data,
// })
// export const removetocart=()=>({
//   type:REMOVE_FROM_PRODUCT,
//   payload:data
// })
// export const increasequantitydata=()=>({
//   type:INCREASE_PRODUCT,
//   payload

// })
// export const decreasequantitydata=()=>({
//   type:DECREASE_PRODUCT,
//   payload
// })
