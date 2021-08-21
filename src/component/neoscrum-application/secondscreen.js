import React from 'react';
import logo from "./Assets/logo@2x.png";
import "./firstscreen.css";

function secondscreen() {
    return (
        <>
         <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cards">
              <div className="div_first">
                <img class="card-img-top " src={logo} alt="Card image cap" />
                <div className="background_div">
                  <div className="div_sec"></div>
                  <button type="button" class="btn btn-default my-5">
                    <span className="span_button">button</span>
                  </button>
                  <h3 className="content1 my-3 text-center ml-5">
                    Hey everyone
                  </h3>
                  <p className="content2 my-3 mx-3">
                    hello everyone please welcome to my channel in your update
                  </p>
                  <button type="button" class="btn btn-primary my-3">
                    <span className="span_button">button</span>
                  </button>
                  <button type="button" class="btn btn-secondary mb-5">
                    <span className="span_button">button</span>
                  </button>
                  <h5 className="para_design mt-5">Hello</h5>
                  <p className="content3 ml-5">
                    Hello everyone welcome to design world
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        </>
    )
}

export default secondscreen
