import React from "react";
import "./custombutton.scss";

function CustomButton(props) {
  const { children, ...otherProps } = props;
  return (
    <button className="customButton" {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
