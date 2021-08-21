import React from "react";
import { Link } from "react-router-dom";
import Paasswordchange from "../change-password/paasswordchange";
// import Userprofile from "../my-account-module/userProfile";

function leftCustomer() {
  return (
    <>
      <div className="container">
        <div className="card text-center" style={{ width: "20rem" }}>
          <img
            className="card-img-top rounded-circle"
            src={localStorage.getItem("photo")}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{localStorage.getItem("fname")}</h5>
            <div className="my-1">
              <i className="fa fa-list mr-2" aria-hidden="true"></i>
              <Link to="/order">Order</Link>
            </div>
            <div className="my-1">
              <i className="fa fa-address-book-o mr-2" aria-hidden="true"></i>
              <Link to="/profile">Profile </Link>
            </div>
            <div className="my-1">
              <i className="fa fa-address-book-o mr-2" aria-hidden="true"></i>
              <Link to="/checkout">Address</Link>
            </div>
            <div className="ml-5">
              {/* <i className="fa fa-arrows-h px-1"></i> */}

              <Paasswordchange />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default leftCustomer;
