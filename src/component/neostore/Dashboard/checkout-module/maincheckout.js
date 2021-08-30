import React from 'react';
import LeftCustomer from "../order-module/leftCustomer";
import Checkoutdetails from "./checkoutdetails";

function Maincheckout() {
    return (
        <>
          <div className="container ">
      <div  className="my-5">
        <h3>My Account</h3>
      </div>
      <hr/>
        <div className="row my-5">
          <div className="col-lg-4 col-sm-4 col-md-4">
            <LeftCustomer />
          </div>
          <div className="col-lg-8 col-sm-8 col-md-8">
              <Checkoutdetails/>
          </div>
        </div>
      </div>
            
        </>
    )
}

export default Maincheckout
