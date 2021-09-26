import React from "react";
import "./custombutton.scss";

function CustomButton(props) {
  const { children, googlebtn, ...otherProps } = props;

  return (
    <button
      className={`customButton ${googlebtn ? "google" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
