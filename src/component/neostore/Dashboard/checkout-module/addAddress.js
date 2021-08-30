import React from "react";
import { useState } from "react";
import axios from "axios";

function AddAddress(props) {
  console.log("updatedadd", props);
  const [addresses, setAddresses] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  console.log("1", addresses, city, state, country, pincode);
  const handleSubmit = (e, pr) => {
    console.log(e, pr);
    e.preventDefault();
    console.log("2", addresses, city, state, country, pincode);
    var data = {
      addressLine: addresses,
      pincode: pincode,
      city: city,
      state: state,
      country: country,
    };
    

    console.log("21", data);
    let token = localStorage.getItem("tokens");
    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/user/address",
      headers: {
        Authorization: token,
      },
      data: data,
    };

    axios(config).then(function (response) {
      console.log("added address", JSON.stringify(response.data));
      console.log(props.addcallback);

      props.addcallback();
      document.getElementById("formsS").style.display = "none";
     

    });
  };

  return (
    <>
      <div>
        <button
          type="button"
          class="btn btn-dark"
          data-toggle="modal"
          data-target="#formsS"
        >
          Add Address
        </button>
      </div>

      <div
        class="modal fade"
        id="formsS"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <h5 class="modal-title" id="exampleaddLabel">
                Add Address
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
            <form onSubmit={(e) => handleSubmit(e, props.addcallback)}>
              <div class="modal-body">
                <div className="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    required
                    value={addresses}
                    type="text"
                    className="form-control"
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
                      placeholder="Enter Country"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputZip">Pincode</label>

                    <input
                      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                      type="tel"
                      pattern="[0-9]+"
                      className="form-control"
                      placeholder="Enter Pincode"
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value.replace(/\D/g, ""));
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

export default AddAddress;
