import React from "react";
import "./menuitems.scss";

function MenuItem(props) {
  const { title, image, size } = props;
  return (
    <div className={`${size} item`}>
      <div
        className="picture"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="contents">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="action">SHOP NOW</p>
      </div>
    </div>
  );
}

export default MenuItem;
