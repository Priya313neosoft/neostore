import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

function AddAddress() {
  const [addresses, setAddresses] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  console.log("1", addresses, city, state, country, pincode);
  const handleSubmit = (e) => {
    e.preventDefault()

 console.log("2", addresses, city, state, country, pincode);
    
var data ={
  "addressLine": addresses,
  "pincode": pincode,
  "city": city,
  "state": state,
  "country":country
};
console.log("21",data);

var config = {
  method: 'post',
  url: 'https://neostore-api.herokuapp.com/api/user/address',
  headers: { 
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log("added address",JSON.stringify(response.data));
  // localStorage.setItem(response.data.data)
})

  };
  
  return (
    <>
      <div>
     {localStorage.getItem("firstname")} 
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#forms"
        >
          Add Address
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
              <h5 class="modal-title" id="exampleaddLabel">
                Create Account
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
            <form onClick={handleSubmit}>
              <div class="modal-body">
              <div className="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    value={addresses}
                    type="text"
                    className="form-control"
                    id="inputAddresss"
                    placeholder="Enter Address"
                    onChange={(e) => setAddresses(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label for="inputCity">City</label>
                    <input
                      value={city}
                      type="text"
                      className="form-control"
                      id="inputCitys"
                      placeholder="Enter City"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <input
                      value={state}
                      type="text"
                      className="form-control"
                      id="inputStates"
                      placeholder="Enter State"
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputCountry">Country</label>
                    <input
                      value={country}
                      type="text"
                      className="form-control"
                      id="inputCountrys"
                      placeholder="Enter Country"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputZip">Pincode</label>
                 
                    <input
                      type="tel"
                      className="form-control"
                      id="inputZips"
                      placeholder="Enter Pincode"
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value);
                      }}
                    />
                  </div> 
                 </div>
               
              </div>
              <div class="modal-footer border-top-0 d-flex justify-content-center">
                <button type="submit" class="btn btn-success">
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
