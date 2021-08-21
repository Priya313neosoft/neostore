import React from "react";
import CardCarousel from "./cardCarousel";
import Detailscard from "./detailscard";
import axios from "axios";
import {useEffect,useState} from "react";
function CommonProduct() {
  const [user, setUser] = useState("");
  console.log(user,"user");
useEffect(()=>{
var config = {
  method: 'get',
  url: 'https://neostore-api.herokuapp.com/api/product',
  headers: { }
};

axios(config)
.then(function (response) {
  // console.log(JSON.stringify(response.data));
  const productdata = response.data.data.docs.find(item=>item._id==="607972ea1e0fbc14a57cfc75");
 console.log(productdata,"productdata");
  setUser(productdata);
})

},[]);
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6">
            <CardCarousel imagemain={user.mainImageUrl} subimage={user.subImagesUrl}/>
            <div className="my-5">
            <nav className="mt-5">
           
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Discription
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Features
                </a>
               
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
             {/* {user.map((items, key) => {
              console.log("guyg", items);
              return (
                <> */}
                  {/* <div className="col-lg-4" key={key}> */}
                  <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
               
               {user.description}
              </div>
                  
                  {/* </div> */}
                {/* </> */}
              {/* );
            })} 
              */}
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
               {user.features}
              </div>
            
            </div>

            </div>
            
          </div>
          <div className="col-lg-6">
            <div>
            <Detailscard carddetails={user}/>

            </div>
             
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonProduct;
