import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../Images/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

function Header(props) {
  const { currentUser, isHidden } = props;
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="menuContainer">
        <Link to="/shop" className="menuItem">
          SHOP
        </Link>
        <Link to="/contact" className="menuItem">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="menuItem" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link to="/signin" className="menuItem">
            {" "}
            SIGN IN{" "}
          </Link>
        )}
        <CartIcon />
      </div>
      {isHidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(Header);
