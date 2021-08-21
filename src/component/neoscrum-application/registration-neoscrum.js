import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Registration() {
  const [emailName, setEmailName] = useState("");
  const [name, setName] = useState("");
  const [fileupload, setFileUpload] = useState("");
  let history=useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(emailName, name, fileupload);
    var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('profileImage',fileupload);
data.append('email', emailName);
data.append('name', name);

var config = {
  method: 'post',
  url: 'http://localhost:4000/register',
  headers: { 
    Accept:"application/json",
    'Content-Type': 'application/json', 
    // ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
 history.push("/login")

 };
const upload = (e) => {
  console.log("40",e.target.files[0]);
  setFileUpload(e.target.files[0])
 
};
//   const handleSubmit=(e) =>{
//   e.preventDefault()
//   const formData = new FormData()
//   formData.append('profileImg', fileupload);
//   formData.append('email', emailName);
// formData.append('name', name);
//   axios.post("https://68180642c768.ngrok.io/register", formData, {
//   }).then(res => {
//       console.log(res)
//   })
// }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Enter New Developer</h3>
            <form onSubmit={handleSubmit} className="backgroundColor:">
              <div className="form-group">
                <label for="exampleInputPassword1">Employee Name</label>
                <input
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  value={name}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
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
              <div>
                <label for="exampleFormControlFile1">Example file input</label>
                <input
                  required
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                  //   onChange={(e)=>{
                  //       setFileUpload(e.target.file)
                  //   }}
                  onChange={(e) => upload(e)}
                />
              </div>
              <div className="py-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <div>
                  <p>
                    Already have an account? <Link to="/Login-neoscrum">Login</Link>.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
