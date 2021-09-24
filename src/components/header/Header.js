import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../Images/crown.svg";

function Header(props) {
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
      </div>
    </div>
  );
}
export default Header;
