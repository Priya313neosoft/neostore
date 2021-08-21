import React from "react";
import "./register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [name, setName] = useState();
  const [password, setpassword] = useState();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form>
              <h1>Register</h1>

              <label for="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                value={name}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                name="psw"
                id="psw"
                required
                onChange={(e) => setpassword(e.target.value)}
              />

              <button type="submit" className="registerbtn">
                Register
              </button>
              <hr></hr>

              <div class="container signin">
                Already have an account? <Link to="/login"> Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
