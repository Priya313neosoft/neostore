
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UpdateAddress(props) {

  const [addresses, setAddresses] = useState(props.addressdata.addressLine);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  console.log(props,props.addressdata,"addressprops")
  
  console.log("1", addresses, city, state, country, pincode);
  const handleSubmit = (e,id) => {
    console.log(id)
     e.preventDefault();
    // console.log("2", addresses, city, state, country, pincode);
    var data = {
      addressLine: addresses,
      pincode: pincode,
      city: city,
      state: state,
      country: country,
    };
    console.log("21", data);
    let tokens=localStorage.getItem("tokens")
    var config = {
      method: "put",
      url: `https://neostore-api.herokuapp.com/api/user/address/${id}`,
      headers: {
        Authorization:
          `${tokens}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      document.getElementById('forms').style.display="none"
      props.updatecallback()
    
    });
  };

  return (
    <>
      <div>
        {/* {localStorage.getItem("firstname")} */}
        <button
          type="button"
          class="btn btn-dark"
          data-toggle="modal"
          data-target="#forms"      
        >
          Edit Address
        </button>
      </div>

      <div
        class="modal fade"
        id="forms"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <h5 class="modal-title" id="exampleModalLabelS">
                Update Address
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={(e)=>handleSubmit(e,props.updatedid)}>
              <div class="modal-body">
                <div className="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                  required
                    value={addresses}
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter Address"
                    onChange={(e) => setAddresses(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label for="inputCity">City</label>
                    <input
                    required
                      value={city}
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="Enter City"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <input
                    required
                      value={state}
                      type="text"
                      className="form-control"
                      id="inputState"
                      placeholder="Enter State"
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputCountry">Country</label>
                    <input
                    required
                      value={country}
                      type="text"
                      className="form-control"
                      id="inputCountry"
                      placeholder="Enter Country"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputZip">Pincode</label>

                    <input
                    required
                      type="tel"
                      className="form-control"
                      id="inputZip"
                      placeholder="Enter Pincode"
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value.replace(/\D/g,""));
                      }}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer border-top-0 d-flex justify-content-center">
                <button type="submit" class="btn btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateAddress;
