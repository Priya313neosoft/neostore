import React from 'react';
import LeftCustomer from "../order-module/leftCustomer";
import Checkoutdetails from "./checkoutdetails";

function Maincheckout() {
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
              <Checkoutdetails/>
          </div>
        </div>
      </div>
            
        </>
    )
}

export default Maincheckout
