import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";
const initialstate = {
  transactions:
     [
      {id:1,text:'Flower',amount:-3},
      {id:2,text:'Salary',amount:20},
     {id:3,text:'Book',amount:-10},
    {id:4,text:'Camera',amount:140}
     ],
};
export const GlobalContext = createContext(initialstate);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);
  return(
      <GlobalContext.Provider value={state.transactions}>
          {children}
      </GlobalContext.Provider>
  ) 
//   function deleteTransaction(id) {
//     dispatch({
//       type: "DELETE_TRANSACTION",
//       payload: id,
//     });
//   }
//   function addTransaction(transaction) {
//     dispatch({
//       type: "ADD_TRANSACTION",
//       payload: transaction,
//     });
//   }
//   return (
//     <GlobalContext.Provider
//       value={{
//         transactions: state.transactions,
//         deleteTransaction,
//         addTransaction,
//       }}
//     ></GlobalContext.Provider>
//   );
 };
