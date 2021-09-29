import React from "react";
import "./custombutton.scss";

function CustomButton(props) {
  const { children, googlebtn, inverted, ...otherProps } = props;

  return (
    <button
      className={`customButton ${googlebtn ? "google" : ""} ${
        inverted ? "inverted" : ""
      } `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
