import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./cartdropdown.scss";

function CartDropdown(props) {
  return (
    <div className="dropdown">
      <div className="items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
