import React from "react";
import StarRating from "./starRating";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from "react-material-ui-carousel";
import { getdashboard } from "../ACTION/dashboard-module.action";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
toast.configure();
function Body(props) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  //console.log(user);
  useEffect(() => {
    //console.log(props,"useeeffe")
    props.dispatch(getdashboard());
  }, []);
  // let fill=props.dashd.filter(item=>item.name === props.fildata)
  // let fill2=props.fildata
  // //console.log(fill,"666")
  // //console.log(fill2,"6666")
  // //console.log(fill=fill2)

  useEffect(() => {
    setUser(props.dashd ? props.dashd : []);
    if (props.fildata == "") {
      setUser(props.dashd ? props.dashd : []);
    } else {
      setUser(
        props.dashd.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s/g, "")
            .trim()
            .includes(props.fildata.toLowerCase().replace(/\s/g, "").trim())
        )
      );
    }
  }, [props.dashd, props.fildata]);
  //

  const add = (productId) => {
    //console.log(productId);
    var axios = require("axios");
    var data = JSON.stringify({
      productId: `${productId}`,
      quantity: 1,
    });
    let token = localStorage.getItem("token");
    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/cart",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        //console.log(response === 400, "true");
        // //console.log(response.status,"131");
        //console.log(response,"1")
        //console.log(response.data.success);
        if (response.status === 200) {
          //console.log(response.data.message);
          //console.log(response.status);
          toast("Product added in the cart");
        }

        //console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        //console.log(error);
        if (error) {
          toast("Product already in the cart");
        }
      });
  };

  return (
    <>
      <div className="container-fluid">
        {loading ? (
          <ClipLoader color={"red"} loading={loading} size={50} />
        ) : (
          ""
        )}
        
                    
                

        <Carousel interval="1500">
          {user.map((items, i) => (
          
            <>
             <Link key={items._id} to={{ pathname:`/home/${items._id}`,state:{items}}}>
             <img   className=" hhhh_image_carousel" src={items.subImages}  onError={(e)=>{e.target.onerror = null; e.target.src="https://images-na.ssl-images-amazon.com/images/I/71Z0WIYvgmL._SL1500_.jpg"}}/>
             </Link>
             </>
         ))}
        </Carousel>
        
      </div>

      <div className="container">
        <div className="text-center">
          <h4>Popular Products</h4>
          <Link to="/product">View All</Link>
        </div>
        <div className="row">
          {user.map((items, key) => {
            console.log(items,"items")
            return (
              <>
                <div className="col-lg-4 col-sm-4 col-md-4 ">
                  <div
                   key={items._id} 
                    className="card text-center my-4 shadow_lg p-3 mb-5 bg-dark rounded "
                    style={{ width: "18rem", height: "22rem" }}
                    key={key}
                  >
          
                     <Link key={items._id} to={{ pathname:`/home/${items._id}`,state:{items}}}>
                    
                    <img  className="card-img-top" src={items.subImages} style={{ height: "10rem" }} onError={(e)=>{e.target.onerror = null; e.target.src="https://images-na.ssl-images-amazon.com/images/I/71Z0WIYvgmL._SL1500_.jpg"}}/>
                       
                       
                       {items.name}</Link>
                    <div className="card-body" >
                   
                      {/* <Link className="card-title" key={items._id} to={{pathname:`/home/${items.id}`, statpass={items}}}>{items.name}</Link> */}
                      <h6 className="card-text" style={{ color: "white" }}>
                        Rs. {items.price}
                      </h6>
                      <button
                        className="btn btn-danger"
                        onClick={() => add(items._id)}
                      >
                        Add to Card
                      </button>
                      <StarRating rating={items.avgRating} />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  //console.log(state.totdashboard.text,"144");
  return {
    dashd: state.totdashboard.dashboardata,
    fildata: state.totdashboard.text,
  };
};
export default connect(mapStateToProps)(Body);
