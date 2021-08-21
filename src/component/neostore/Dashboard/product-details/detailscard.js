import React from "react";
import StarRating from "../dashboard-module/starRating";
import { Link } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import axios from "axios";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  PinterestShareButton,
  //   PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailIcon,
  EmailShareButton,
} from "react-share";

const labels = {
  1: "Bad",
  2: "poor",
  3: "ok",
  4: "Good",
  5: "Excellent",
};
const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});


function Detailscard(props) {
   const [value, setValue] = useState("");
  const [hover, setHover] = useState("");
  console.log(props.carddetails);
  const carddd = props.carddetails;
  const { color, price, id,name,avgRating } = props.carddetails;
  const add = (productId) => {
    console.log(productId);
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
              className="btn btn-primary"
              data-toggle="modal"
              data-target=".bd-example-modal-sm"
            >
              Rate Product
            </button>

            <div
              className="modal fade bd-example-modal-sm"
              tabindex="-1"
              role="dialog"
              aria-labelledby="mySmallModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
         onChange={(event, newValue) => {
           console.log("ratings",props)
             setValue(props.rating);
           }}
           onChangeActive={(event, newHover) => {
             setHover(newHover);
           }}
         onChange={(e) => {
           setValue(e.target.value);
         }}
         onChangeActive={(e) => {
           setHover(e.target.value);
       }}
      />
       {value !==null && <Box>{labels[hover !==-1 ? hover : value]}</Box>}

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
