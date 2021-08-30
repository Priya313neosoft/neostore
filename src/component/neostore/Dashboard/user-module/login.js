import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./neostore.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { OldSocialLogin as SocialLogin } from "react-social-login";
import TwitterLogin from "react-twitter-auth";
toast.configure();
const handleSocialLogin = (user, err) => {
  //console.log(user);
  //console.log(err);
};
function Login() {
  const [emailName, setEmailName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggIn,setisLoggIn]=useState(false)
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(e);
    //console.log(emailName, password);
 
var data = JSON.stringify({
  "email": emailName,
  "password": password
});

var config = {
  method: 'post',
  url: 'https://neostore-api.herokuapp.com/api/auth/login',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  //console.log(response.data.data.token)
  localStorage.setItem("tokens",response.data.data.token)
  history.push("/home");
  // window.alert("Enter your correct username and password")
})
.catch(function (error) {
  //console.log(error);
  if(error){
    toast("Please enter correct UserName and Password");
  }
});
 

  };
  
  const onFailed = ()=>{

  }
  const onSuccess = ()=>{

  }
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 border_right">
            <div className="mx-3 my-3">
              <div className="icons_design1 my-2">
                <Link style={{ color: "white" }}>
                  <SocialLogin
                    provider="facebook"
                    appId="352188369906480"
                    callback={handleSocialLogin}
                  >
                    <i
                      className="fa fa-facebook mx-3  "
                      style={{ color: "white" }}
                    >Login with facebook</i>
                  </SocialLogin>
                </Link>
              </div>
              <div className="icons_design2 my-2">
                <Link
               
                  style={{ color: "white" }}
                >
                    <SocialLogin
                    provider="google"
                    appId="352188369906480"
                    callback={handleSocialLogin}
                  >
                    <i
                      className="fa fa-google mx-3  "
                      style={{ color: "white" }}
                    >Login with Google</i>
                  </SocialLogin>
                 
                </Link>
              </div>
              <div className="icons_design3 my-2">
              <TwitterLogin
            className="tw"
            style={{}}
  loginUrl="http://localhost:3000/api/v1/auth/twitter"
  onFailure={onFailed}
  onSuccess={onSuccess}
  requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse"
/>
                {/* <Link
                  to="/https://www.facebook.com/"
                  style={{ color: "white" }}
                >
                  <i
                    className="fa fa-twitter mx-3 "
                    style={{ color: "white" }}
                  ></i>
                  Login with Twitter
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h4>Login To NeoSTORE</h4>
              
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
                <input
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  value={password}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <h5 className="text-center">
            
            <Link to="/register">Register Now</Link>
            <Link to="/forgetpassword" className="vertical">Forgetten</Link>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Login;
