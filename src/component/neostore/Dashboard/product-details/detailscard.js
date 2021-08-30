import React from "react";
import StarRating from "../dashboard-module/starRating";
import { Link } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { useLocation } from "react-router-dom";
// import SliderImage from "react-zoom-slider";
import CardCarousel from "./cardCarousel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailIcon,
  EmailShareButton,
} from "react-share";
toast.configure();

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

function Detailscard(props) {
  const location = useLocation();
  console.log(location.state.items);

  console.log("detailsproduct", props, props.location);

  const [values, setValues] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  console.log(hover, "777");
  console.log(values, "777");
  const classes = useStyles();
  //console.log(props.carddetails);
  const carddd = props.carddetails;
  const { color, price, id, name, avgRating,description,features,mainImage} = location.state.items;
  const add = (productId) => {
    //console.log(productId);
    var data = JSON.stringify({
      productId: productId,
      quantity: 1,
    });
    let tokens = localStorage.getItem("tokens");
    var config = {
      method: "post",
      url: "https://neostore-api.herokuapp.com/api/cart",
      headers: {
        Authorization: tokens,
        // ,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(function (response) {
    
      if (response.status === 200) {
        
        toast("Product added in the cart");
      }  
    })
    .catch(function (error) {
    
      if(error){
        toast("Product already in the cart");
      }
    });    
  };

  return (
    <div className="container">
    
      <div className="card " style={{ width: "28rem" }}>
        <div className="card-body">
          <h6 className="card-text">{name}</h6>
          <StarRating rating={avgRating} />
          <hr />
          <h6 className="card-text">Price: Rs.{price}</h6>
          {/* <h6 className="card-text">Color:{color.name} </h6> */}
          <h5 className="card-text my-3">
            Share<i className="fa fa-share-alt"></i>
          </h5>
          <div className="ml-5">
            <FacebookShareButton
              url={`https://</div>www.youtube.com/watch?v=LaaimvyTZo4`}
            >
              <FacebookIcon size={50} round={true} />
              {(shareCount) => (
                <span className="myShareCountWrapper">{shareCount}</span>
              )}
            </FacebookShareButton>
            <WhatsappShareButton
              url={`https://</div>www.youtube.com/watch?v=LaaimvyTZo4`}
            >
              <WhatsappIcon size={50} round={true} />
              {(shareCount) => (
                <span className="myShareCountWrapper">{shareCount}</span>
              )}
            </WhatsappShareButton>
            <PinterestShareButton
              url={`https://</div>www.youtube.com/watch?v=LaaimvyTZo4`}
            >
              <PinterestIcon size={50} round={true} />
              {(shareCount) => (
                <span className="myShareCountWrapper">{shareCount}</span>
              )}
            </PinterestShareButton>
            <TwitterShareButton
              url={`https://</div>www.youtube.com/watch?v=LaaimvyTZo4`}
            >
              <TwitterIcon size={50} round={true} />
              {(shareCount) => (
                <span className="myShareCountWrapper">{shareCount}</span>
              )}
            </TwitterShareButton>
            <EmailShareButton
              url={`https://</div>www.youtube.com/watch?v=LaaimvyTZo4`}
            >
              <EmailIcon size={50} round={true} />
              {(shareCount) => (
                <span className="myShareCountWrapper">{shareCount}</span>
              )}
            </EmailShareButton>
          </div>
          <div className="my-2">
            <button
              className="btn btn-primary mx-2 btn-md"
              onClick={() => add(id)}
            >
              Add to Card
            </button>
            {/* <button className="btn btn-success btn-md" onClick={handlesubmit}>Rate Product</button> */}

            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalrating"
            >
              Add Rating
            </button>

            <div
              class="modal fade"
              id="exampleModalrating"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabelrating">
                      Rating
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
                  <div class="modal-body">
                    <div className={classes.root}>
                      <Rating
                        name="hover-feedback"
                        value={values}
                        precision={0.5}
                        onChange={(event, newValues) => {
                          setValues(event, newValues);
                        }}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                      />
                      {values !== null && (
                        <Box ml={2}>{labels[hover ? hover : values]}</Box>
                      )}
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailscard;
