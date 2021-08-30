import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Regiister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [gender,setGender]=useState("")
  let history=useHistory()
 
  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(firstName, lastName, emailName, password, confirm, phone);  
    var data = JSON.stringify({
      "firstName":firstName,
      "lastName": lastName,
      "email": emailName,
      "mobile":phone,
      "gender": gender,
      "password": password,
      "confirm_password":confirm
    });
    //console.log(data)
if(password !== confirm){
  window.alert(
    "password not  matched"
  )}
 

  // else{
  //   window.alert("registered success")
  // }
  
    // //console.log(data);
    //
  // return
   
    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        //console.log(response.data.data.token)
        localStorage.setItem("token",(response.data.data.token))
        window.alert("successfully registered")
        localStorage.setItem("fname", (response.data.data.firstName));
        localStorage.setItem("lname", (response.data.data.lastName));
        localStorage.setItem("email", (response.data.data.email));
        localStorage.setItem("phone",(response.data.data.mobile));
        localStorage.setItem("gender",(response.data.data.gender));
        history.push("/login")
        // localStorage.setItem("dob","31/03/1995")     
      })
      .catch(function (error) {
        //console.log(error);
      });
  };
  // //console.log(data);
 

  return (
    <div className="container">
      <div>
        <form onSubmit={handleSubmit} style={{ backgroundColor: "skyblue" }}>
          <div className="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="First name"
            />

            <label for="exampleInputEmail3">Last NAME</label>
            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="last name"
            />
            <label for="exampleInputEmail2">Email address</label>

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
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <span style={{ float: "right" }}>
              PASSWORD MUST BE 8 TO 10 CHARACTER
            </span>
            <input
              required
              type="password"
              maxLength="10"
              minLength="8"
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
            type="password"
              required
              maxLength="10"
              minLength="8"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
              pattern="[A-Za-z0-9]+"
            />
            <label for="exampleInputPassword12">Phone Number</label>
            <input
              required
              value={phone}
              maxLength="10"
              minLength="10"
              onChange={(e) => {
                setPhone(e.target.value.replace(/\D/g,""));
              }}
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Phone number"
              maxLength="10"
              pattern="[9]{1}[0-9]{9}"
              
            />
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="female"
              id="female"
              value="female"
            
              onClick={(e)=>setGender(e.target.value)}
            />
            <label class="form-check-label" for="inlineRadio1">
              FEMALE
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="male"
              id="male"
              value="male"
              onClick={(e)=>setGender(e.target.value)}
              
            />
            <label class="form-check-label" for="inlineRadio2">
              MALE
            </label>
          </div>

          <div>
            <button type="submit" className="btn btn-danger btn-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Regiister;
