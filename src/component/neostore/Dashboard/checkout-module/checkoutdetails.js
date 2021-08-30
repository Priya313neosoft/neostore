import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import AddAddress from "./addAddress";
import Updateaddress from "./updateaddress";

function Checkoutdetails() {
  const [addresses, setAddresses] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [updatedAdd,setUpdatedAdd]=useState(false);
  const [isAdd,setIsAdd]=useState(false);
  const updateadres=()=>{
    setUpdatedAdd(!updatedAdd)
    console.log("priya")
  }
 
  console.log(deleted);
  const addaddr=()=>{
    console.log("pihu")
    setIsAdd(!isAdd)

  }
const removeaddress=(id)=>{
  console.log(id);
  let tokens=localStorage.getItem("tokens")
  var config = {
    method: "delete",
    url: `https://neostore-api.herokuapp.com/api/user/address/${id}`,
    headers: {
      Authorization:
        `${tokens}`,
    },
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if(response.data)
     console.log(window.confirm("If you want to delete"),"123445")
      window.confirm("If you want to delete")
      setDeleted(!deleted)
    })
}
  

  useEffect(() => {
    let tokens=localStorage.getItem("tokens")
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/user/address",
      headers: {
        Authorization:
          `${tokens}`,
      },
    };

    axios(config).then(function (response) {
      let response1=response.data.data.address
      setAddresses(response1);
      localStorage.setItem("addressLine",JSON.stringify(response1.map((obb)=>obb.addressLine)))
      localStorage.setItem("city",JSON.stringify(response1.map((obb)=>obb.city)))
      localStorage.setItem("state",JSON.stringify(response1.map((obb)=>obb.state)))
      localStorage.setItem("country",JSON.stringify(response1.map((obb)=>obb.country)))
      localStorage.setItem("pincode",JSON.stringify(response1.map((obb)=>obb.pincode)))
   
    });
  }, [deleted,updatedAdd,isAdd]);

  return (
    <>
      <div className="container">
        <div className="card  card_mob" style={{ width: "40rem" }}>
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
                     
                        <b className="mr-3">Address:</b> {items.addressLine},
                      </p>
                      <p>
                        <b className="mr-3">Pincode:</b> {items.pincode},
                      </p>
                      <p>
                        <b className="mr-3">City:</b> {items.city},
                      </p>
                      <p>
                        <b className="mr-3">State:</b> {items.state},
                      </p>
                      <p>
                        <b className="mr-3">Country:</b> {items.country}
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
                        <Updateaddress updatedid={items._id} updatecallback={updateadres} addressdata={items} />
                      </div>
                      <hr />
                    </div>
                  </>
                );
              })}
            </div>

            <div>
              <AddAddress addcallback={addaddr}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkoutdetails;
