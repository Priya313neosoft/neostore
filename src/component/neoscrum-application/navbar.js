import React from "react";
import priya from "./Assets/priya2.jpg";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const handelClick = () => {
    history.push("/addfeedback");
  };
  const handleLogout = () => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:4000/logout",
      headers: {
        Accept:"application/json",
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    history.push("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <img
            src={priya}
            className="img-fluid rounded-circle"
            alt="Responsive image"
            style={{ width: "60px", height: "60px" }}
          />
          <a className="navbar-brand" href="#">
            PRIYA KUMARI
          </a>
          <ul
            className="navbar-nav mr-auto mt-2 mt-lg-0"
            style={{ marginLeft: "800px" }}
          >
            <li className="nav-item active">
              <button className="btn btn-primary mx-2 " onClick={handelClick}>
                Add Feedback
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
