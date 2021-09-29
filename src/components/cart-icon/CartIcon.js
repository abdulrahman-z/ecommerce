import React from "react";
import { connect } from "react-redux";
import { ReactComponent as BagIcon } from "../../Images/shopping-bag.svg";
import "./carticon.scss";
import { toggleCartHidden } from "../../redux/cart/cartActions";

function CartIcon(props) {
  const { toggleCartHidden } = props;

  return (
    <div className="cart" onClick={toggleCartHidden}>
      <BagIcon className="bagicon" />
      <span className="bagCount">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

export default connect(null, mapDispatchToProps)(CartIcon);
