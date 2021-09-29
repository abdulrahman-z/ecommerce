import React from "react";
import { connect } from "react-redux";
import { ReactComponent as BagIcon } from "../../Images/shopping-bag.svg";
import "./carticon.scss";
import { toggleCartHidden } from "../../redux/cart/cartActions";

function CartIcon(props) {
  const { toggleCartHidden, cartCount } = props;

  return (
    <div className="cart" onClick={toggleCartHidden}>
      <BagIcon className="bagicon" />
      <span className="bagCount">{cartCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartCount: Object.keys(cartItems).length,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
