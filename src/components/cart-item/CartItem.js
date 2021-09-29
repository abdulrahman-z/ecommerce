import React from "react";
import "./cartitem.scss";

function CartItem({ item }) {
  const { id, name, price, imageUrl, quantity } = item;
  return (
    <div className="cartitem" key={id}>
      <img src={imageUrl} alt="productimage" />
      <div className="contents">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
