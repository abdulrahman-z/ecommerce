import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../Images/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

function Header(props) {
  const { currentUser } = props;
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
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
