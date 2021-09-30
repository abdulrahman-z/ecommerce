import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotalValue,
} from "../../redux/cart/cartSelectors";
import "./checkout.scss";

function Checkout({ totalPrice, cartItems }) {
  const titles = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <div className="checkoutpage">
      <div className="checkoutheader">
        {titles.map((title, idx) => {
          return (
            <div className="headerblock" key={idx}>
              <span className="title">{title}</span>
            </div>
          );
        })}
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}

      <div className="total">
        <span className="value">TOTAL : ${totalPrice}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  totalPrice: selectCartTotalValue,
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Checkout);
