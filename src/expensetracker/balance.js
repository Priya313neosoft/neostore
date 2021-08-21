import React ,{useContext}from "react";
import { GlobalContext } from './context/globalState'

function Balance() {
  const {transactions}=useContext(GlobalContext);
  const amounts
  return (
    <>
      <div className="container">
        <h4>your balance</h4>
      </div>
    </>
  );
}

export default Balance;
