import React from "react";
import LeftCustomer from "./leftCustomer";
import Orderdetails from "./orderdetails";
import ClipLoader from "react-spinners/ClipLoader"
import {useState,useEffect} from "react";

function Mainorder() {
const [loading, setLoading] = useState(false)
useEffect(() => { 
  setLoading(true);
setTimeout(()=>{setLoading(false)},3000)
}, [])
  return (
    <>
    <div className="container">
      <div className="my-4">
        <h3 className="text-center">Order</h3>
      </div>
      <hr/>
        <div className="row my-5">
          <div className="col-lg-4 col-sm-12 col-md-4">
            <LeftCustomer />
          </div>
          {loading?  <ClipLoader color={"red"} loading={loading}  size={50} /> : 
          <div className="col-lg-8 col-sm-12 col-md-4">
              <Orderdetails/>
          </div>}
        </div>
      </div>
     
    </>
  );
}

export default Mainorder;
