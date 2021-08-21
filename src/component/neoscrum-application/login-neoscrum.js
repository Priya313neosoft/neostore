import React from "react";
import { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
function LoginNeoScrum() {
  const [emailName, setEmailName] = useState("");
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [valuess, setValuess] = useState("");
  console.log(valuess)

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailName();
    setValues({ ...values, showPassword: false });
    setValuess(valuess)
    console.log("18",valuess);
    console.log("19",values);
    //   setConfirmPass();
    //   console.log(setConfirmPass);
    //   console.log(confirmPass.confirmPass);
    //   console.log(values.password);
    //   console.log(e);
    console.log(emailName, values,valuess);
    //   if (confirmPass.confirmPass !== values.password) {
    //     alert("password not matched");
    //   } else alert("password matched");
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChanges=(e)=>{
    setValuess(e.target.value)
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div id="sq"></div>
          <div className="col-lg-6">
            <h3>Login</h3>

            <form
              onSubmit={handleSubmit}
              style={{ backgroundColor: "skyblue" }}
            >
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
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>{" "}
                <span>
                  <i
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    Show
                  </i>
                </span>
                <input
                  required
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  pattern="[A-Za-z0-9]+"
                />
                 <label for="exampleInputPassword12"> confirm Password</label>{" "}
               
                <input
                  required
                   value={valuess}
                   onChange={handleChanges}
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Password"
                  pattern="[A-Za-z0-9]+"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginNeoScrum;
