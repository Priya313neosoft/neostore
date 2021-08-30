import React from "react";
import CardCarousel from "./cardCarousel";
import Detailscard from "./detailscard";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {useEffect,useState} from "react";
function CommonProduct() {
  const [user, setUser] = useState("");
  //console.log(user,"user");
  const location = useLocation();
  const { color, price, id, name, avgRating,description,features,mainImage} = location.state.items;

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
              //console.log("guyg", items);
              return (
                <> */}
                  {/* <div className="col-lg-4" key={key}> */}
                  <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
               
               {description}
              </div>
                  
           
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
               {features}
              </div>
            
            </div>

            </div>
            
          </div>
          <div className="col-lg-6">
            <div>
            <Detailscard />

            </div>
             
          </div>
        </div>
      </div>
    </>
  );
}

export default CommonProduct;
