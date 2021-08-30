import React from "react";
import {useHistory} from "react-router-dom"

function Welcome() {
  let history=useHistory()
  const handleClick=()=>{
    history.push("/")
  }
  return (
    <>
      <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for subscribing to our news letter. </p>
            <p>you should receive a confirmation email soon </p>
            <button onClick={handleClick} className="go-home">go home</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
