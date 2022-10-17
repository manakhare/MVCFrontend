import React from "react";
import "./card.css";

function Card(props) {
  const {
    title,
    description,
    imageList,
    thumbnail,
    price,
    discountPercentage,
    rating,
  } = props;

  // console.log(imageList[0]);
  return (
    <div className="card-container">
      <div className="image-container">
        {/* {imageList.map((image, id) => {
          <img key={id} src={image[0]} />
        })} */}
        <img src={imageList[0]}></img>
        <div className="rating">{rating}</div>
      </div>

      <div className="text-container">
        <div className="title">{title}</div>
        {/* <div className="description">{description}</div> */}
        <div className="cost-container">
          <div className="cost">Rs. {price}</div>
          <div className="discount">{discountPercentage}% off</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
