import React from "react";
import { useState } from "react";

function Recover() {
    const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [tokens, setTokens] = useState("");
  const handleSubmit=()=>{
    var axios = require('axios');
var data = JSON.stringify({
  "token": tokens,
  "password": password,
  "repeatPassword": confirm
});

var config = {
  method: 'post',
  url: 'https://neostore-api.herokuapp.com/api/auth/set-password',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  //console.log(error);
});


  }
  return (
    <>
      <div className="container my-5">
        <h4>Recover Password</h4>
        <p>Verification code send on your registered Email</p>
        <form onSubmit={handleSubmit} style={{ backgroundColor: "skyblue" }}>
          <div className="form-group">
            <label for="exampleInputPassword12">Phone Number</label>
            <input
              required
              value={tokens}
           
              onChange={(e) => {
                setTokens(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Phone number"
            
              // pattern="[0-9]+"
            />
            <label for="exampleInputPassword1">Password</label>
            <span style={{ float: "right" }}>
              PASSWORD MUST BE 8 TO 10 CHARACTER
            </span>
            <input
              required
              maxLength="10"
              minLength="6"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              pattern="[A-Za-z0-9]+"
            />
            <label for="exampleInputPassword12"> Confirm Password</label>
            <span style={{ float: "right" }}>
              PASSWORD MUST BE 8 TO 10 CHARACTER
            </span>
            <input
              required
              maxLength="10"
              minLength="6"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
              pattern="[A-Za-z0-9]+"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-danger btn-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Recover;
