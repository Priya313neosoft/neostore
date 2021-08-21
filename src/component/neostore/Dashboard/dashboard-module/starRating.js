import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

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
  // const [value, setValue] = useState("");
  // const [hover, setHover] = useState("");
  return (
    <div>
      <Rating
        name="hover-feedback"
        value={props.rating}
        precision={0.5}
        // onChange={(event, newValue) => {
        //   console.log("ratings",props)
        //     setValue(props.rating);
        //   }}
          // onChangeActive={(event, newHover) => {
          //   setHover(newHover);
          // }}
        // onChange={(e) => {
        //   setValue(e.target.value);
        // }}
        // onChangeActive={(e) => {
        //   setHover(e.target.value);
        // }}
      />
      {/* {value !==null && <Box>{labels[hover !==-1 ? hover : value]}</Box>} */}
    </div>
  );
}

export default StarRating;
