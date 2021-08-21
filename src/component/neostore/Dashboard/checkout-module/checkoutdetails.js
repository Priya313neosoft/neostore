import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AddAddress from "./addAddress";
import Updateaddress from "./updateaddress";

function Checkoutdetails() {
  const [addresses, setAddresses] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [updatedAdd,setUpdatedAdd]=useState(false);
  const updateadres=()=>{
    setUpdatedAdd(!updatedAdd)
    console.log("priya")

  }
  // console.log(addresses);
  console.log(deleted);
const removeaddress=(id)=>{
  console.log(id);
  var config = {
    method: "delete",
    url: `https://neostore-api.herokuapp.com/api/user/address/${id}`,
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
    },
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setDeleted(!deleted)
    })
  

}
  

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/user/address",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
      },
    };

    axios(config).then(function (response) {
      // console.log(JSON.stringify(response.data));
      setAddresses(response.data.data.address);
    });
  }, [deleted,updatedAdd]);

  return (
    <>
      <div className="container">
        <div className="card" style={{ width: "40rem" }}>
          <div className="card-body">
            <div>
              <h3>Addresses</h3>
            </div>
            <hr />
            <div>
              {addresses.map((items, key) => {
                // console.log(items,"address")
                return (
                  <>
                    <div
                      key={items._id}
                    //   className="alert  alert-dismissible
                    // fade show w-50"
                    //   role="alert"
                    ><i className="fa fa-times-circle" style={{float:"right"}} onClick={()=>{removeaddress(items._id)}}></i>
                      <p>
                        <p>{items._id}</p>
                        <b>Address: {items.addressLine},</b>
                      </p>
                      <p>
                        <b>Pincode: {items.pincode},</b>
                      </p>
                      <p>
                        <b>City: {items.city},</b>
                      </p>
                      <p>
                        <b>State: {items.state},</b>
                      </p>
                      <p>
                        <b>Country: {items.country}</b>
                      </p>

                      {/* <button
                        style={{ float: "right" }}
                        type="button"
                        className="btn close btn-danger btn-lg"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button> */}
                      <div>
                        <Updateaddress updatedid={items._id} updatecallback={updateadres} />
                      </div>
                      <hr />
                    </div>
                  </>
                );
              })}
            </div>

            <div>
              <AddAddress />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkoutdetails;
