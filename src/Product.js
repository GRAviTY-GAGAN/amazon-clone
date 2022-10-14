import React from "react";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
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

      <img src={image} alt="product image" />

      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
