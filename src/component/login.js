import React from "react";
import {useState} from "react";

import {useHistory} from "react-router-dom"
import axios from "axios";
function Login() {
  const [emailName,setEmailName]= useState("")
  const [password,setPassword]= useState("")
  let history=useHistory()
   const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(e)
    console.log(emailName,password);
var data={
  "email": emailName,
  "password": password
}
const callback = await axios.post("http://localhost:4000/DeveloperSignin", data, {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})
console.log(callback);
console.log(callback.status);
 history.push("/dashboard")
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                required
                  type="email"
                  value={emailName}
                  onChange={(e)=>{setEmailName(e.target.value)}}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />   
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                required
                onChange={(e)=>{setPassword(e.target.value)}}
                  type="password"
                  value={password}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />         
              </div>   
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
