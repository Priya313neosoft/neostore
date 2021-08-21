import React from "react";
import StarRating from "./starRating";
import priya2 from "../../../neoscrum-application/Assets/priya2.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Body() {
  const [user, setUser] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  console.log(user);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/product",
      headers: {},
    };
    axios(config).then(function (response) {
      // console.log(JSON.stringify(response.data));
      setUser(response.data.data.docs);
    });
  }, []);
  const add = (productId) => {
    console.log(productId);
    var axios = require("axios");
    var data = JSON.stringify({
      productId: productId,
      quantity: 1,
    });
    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/cart",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(function (response) {
      // console.log(JSON.stringify(response.data));
    });
  };

  const allCarts = user.map((items, key) => {
    console.log(user);
    return (
      <>
        <div className="col-lg-3">
          <div
            className="card text-center  my-2 mx-2"
            style={{ width: "18rem", height: "22rem" }}
            key={key}
          >
            <img
              className="card-img-top "
              src={items.subImages}
              alt="Card image cap"
              style={{ height: "10rem" }}
            />
            <div className="card-body">
              <Link className="card-title">{items.name}</Link>
              <h6 className="card-text">{items.price}</h6>
              <button className="btn btn-danger" onClick={() => add(items._id)}>
                Add to Card
              </button>
              <StarRating rating={items.avgRating}  />
            </div>
          </div>
        </div>
      </>
    );
  });
  const fewCarts = user.slice(0, 5).map((items, key) => {
    return (
      <>
        <div className="col-lg-3 ">
          <div
            className="card text-center my-2 mx-2"
            style={{ width: "18rem", height: "22rem" }}
            key={key}
          >
            <img
              className="card-img-top "
              src={items.subImages}
              alt="Card image cap"
              style={{ height: "10rem" }}
            />
            <div className="card-body">
              <Link className="card-title">{items.name}</Link>
              <h6 className="card-text">{items.price}</h6>
              <button className="btn btn-danger" onClick={() => add(items._id)}>
                Add to Card
              </button>
              <StarRating rating={items.avgRating}/>
            </div>
          </div>
        </div>
      </>
    );
  });

  const viewall = viewAll ? allCarts : fewCarts;
  return (
    <>
      <div className="container">
        <div className="my-5">
          <img className="card-img-top " src={localStorage.getItem("photo")} alt="Card image cap" />
        </div>
        <div className="text-center">
          <h4>Popular Products</h4>
          <Link onClick={() => setViewAll(!viewAll)}>{!viewAll ? 'View All':'View Less'}</Link>
        </div>
        <div className="row">
          {viewall}
        </div>
      </div>
    </>
  );
}

export default Body;
