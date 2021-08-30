import React from "react";
import {useState} from "react"
import { useHistory } from "react-router-dom";

function ForgetPssword() {
  const [emailName, setEmailName] = useState("");
  const history=useHistory();
  const handleSubmit = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "email":emailName
    });
    
    var config = {
      method: 'post',
      url: 'https://neostore-api.herokuapp.com/api/auth/forgot-password',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      history.push("/recover")
    })
    .catch(function (error) {
      //console.log(error);
    });
    
  };
 
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit} style={{ backgroundColor: "skyblue" }}>
        <div className="form-group">
          <label for="exampleInputEmail1" className="text-center">Enter Email address to Recover Password</label>
          <input
            required
            type="email"
            value={emailName}
            onChange={(e) => {
              setEmailName(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-danger btn-lg">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default ForgetPssword;
