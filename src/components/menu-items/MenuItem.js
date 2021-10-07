import React from "react";
import { useHistory } from "react-router";
import "./menuitems.scss";

function MenuItem(props) {
  const { title, image, size, link } = props;

  const history = useHistory();
  return (
    <div className={`${size} item`}>
      <div
        onClick={() => history.push(link)}
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
