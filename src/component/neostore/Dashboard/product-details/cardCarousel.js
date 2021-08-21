import React from "react";
import SliderImage from "react-zoom-slider";
const data = [
  {
    image:
    "https://images-na.ssl-images-amazon.com/images/I/71Z0WIYvgmL._SL1500_.jpg",
    text: "img1",
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/61LgPwOmldL._SL1500_.jpg%22,%20%22https://images-na.ssl-images-amazon.com/images/I/61mgURGhsvL._SL1500_.jpg",
    text: "img2",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61mgURGhsvL._SL1500_.jpg",
    text: "img3",
  },
];


function CardCarousel(props) {
  // const {image}=props
  console.log(props,"propsimage")
  return (
    <div>
      <SliderImage
        data={data}
        width="500px"
        showDescription={true}
        direction="right"
      />
    </div>
  );
}

export default CardCarousel;
