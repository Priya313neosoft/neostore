import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";


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

function StarRating(props) {
console.log("rating",props)

  return (
    <div>
      <Rating
        name="hover-feedback"
        value={props.rating}
        precision={0.5}
     />
    </div>
  );
}

export default StarRating;
