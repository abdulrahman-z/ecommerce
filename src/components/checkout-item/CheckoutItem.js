import React from "react";
import "./checkoutitem.scss";

function CheckoutItem({ cartItem: { imageUrl, name, price, quantity } }) {
  return (
    <div className="checkoutitem">
      <div className="image">
        <img src={imageUrl} alt="product" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove">&#10005;</div>
    </div>
  );
}

export default CheckoutItem;
