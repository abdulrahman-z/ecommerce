import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  decreaseRemoveItem,
  addItemToCart,
} from "../../redux/cart/cartActions";
import "./checkoutitem.scss";

function CheckoutItem({ cartItem, clearItem, removeDecrease, addIncrease }) {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkoutitem">
      <div className="image">
        <img src={imageUrl} alt="product" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeDecrease(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addIncrease(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeCartItem(item)),
  removeDecrease: (item) => dispatch(decreaseRemoveItem(item)),
  addIncrease: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
