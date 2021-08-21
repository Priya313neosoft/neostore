import React from "react";
import LeftCustomer from "./leftCustomer";
import Orderdetails from "./orderdetails";

function Mainorder() {
  return (
    <>
      <div className="container">
      <div >
        <h3>My Account</h3>
      </div>
      <hr/>
        <div className="row">
          <div className="col-lg-4">
            <LeftCustomer />
          </div>
          <div className="col-lg-8">
              <Orderdetails/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainorder;
