import React ,{useContext}from 'react'
import { GlobalContext } from './context/globalState'
import Transaction from "./transaction"
function Transactionlist() {
    //  const context = useContext(GlobalContext);
    //  console.log(context,"PRIYA")
     const {transactions}=useContext(GlobalContext)
    //  console.log(transactions)
    return (      
        <>
        <Transaction trnsactiondata={transactions}/>

    
       
      
            
        </>
    )
}

export default Transactionlist
