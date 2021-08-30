import React from "react";
import { Link } from "react-router-dom";
import  Paasswordchange from "../change-password/ChangePassword";
// import Paasswordchange from "../change-password/paasswordchange";
import priya2 from "../Assets/priya2.jpg"
// import Userprofile from "../my-account-module/userProfile";
// import  "./footer.css"
function imgError(image) {
  console.log(this,"this")
  image.onerror = "";
  image.src ={priya2}
  return true;
}
function leftCustomer() {
  return (
    <>
      <div className="container">
        <div className="card card_mobile " style={{ width: "22em" }}>
        <img src={priya2} onerror="imgError(this)"/>
        <img src={localStorage.getItem("photo")} onError="this.onerror=null;this.src='https://images-na.ssl-images-amazon.com/images/I/81i6R3r1rsL._SL1500_.jpg';" />
          <img   className="card-img-top rounded-circle" id="currentPhoto" src={localStorage.getItem("photo")} onerror="this.src='https://images-na.ssl-images-amazon.com/images/I/81i6R3r1rsL._SL1500_.jpg'" alt=""></img>       
          <div className="card-body">
            <h5 className="card-title">{localStorage.getItem("fname")}</h5>
            <div className="my-1">
              <i className="fa fa-list mr-2" aria-hidden="true"></i>
              <Link to="/order" style={{textAlign:"left"}}>Order</Link>
            </div>
            <div className="my-1">
              <i className="fa fa-address-book-o mr-2" aria-hidden="true"></i>
              <Link to="/profile">Profile </Link>
            </div>
            <div className="my-1">
              <i className="fa fa-address-book-o mr-2" aria-hidden="true"></i>
              <Link to="/checkout">Address</Link>
            </div>
            <div >
            <Link to="/passwordchange" style={{textAlign:"left"}}>Change Password</Link>
            {/* <Paasswordchange /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default leftCustomer;
