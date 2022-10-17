import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  console.log("THIS IS BASKET", basket);

  const addToBasket = () => {
    // dispatch item into to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹ </small>
          <strong> {price}</strong>
        </p>
        <div className="product__rating">
          {/* using the rating prop to display no of stars dynamically */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product pic" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
