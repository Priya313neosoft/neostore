import React from "react";
import {Link, useHistory} from "react-router-dom";
import Priya_kumari  from "./Priya_Kumari.pdf";

function Footer() {
  let history=useHistory()
  const handelClick=()=>{
    history.push('/locateus')
  }
  const handleWelcome=()=>{
    history.push('/welcome')
  }
  return (
    <footer className="mt-auto">
    <div className="container-fluid footer_deisgn">
      <div className="row">
        <div className="col-lg-4">
          <h3 className="my-3">About Company</h3>
          <p>Neosoft Technology</p>
          <p>Neosoft Technology</p>
          <p>Neosoft Technology</p>
        </div>
        <div className="col-lg-4">
          <h3 className="my-3">Information</h3>
        <div>
        <Link to={Priya_kumari} target="_blank">Privacy Policy</Link>
        </div>
        <div>
        <Link onClick={handelClick}>Locate us</Link>
        </div>
        
         
         
        </div>
        <div className="col-lg-4">
          <h3>Newsletter</h3>
          <p>Neosoft technology Working in this domain</p>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <button type="submit" className="btn btn-light btn-lg" onClick={handleWelcome}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
      <h5 className="text-center">copyright @2021 /</h5>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
