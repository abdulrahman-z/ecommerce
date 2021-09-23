import React from "react";
import "./menuitems.scss";

function MenuItem(props) {
  const { title, image, size } = props;
  return (
    <div
      className={`${size} item`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="contents">
        <h1 className="title">{title}</h1>
        <p className="action">SHOP NOW</p>
      </div>
    </div>
  );
}

export default MenuItem;
