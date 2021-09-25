import React from "react";
import "./forminput.scss";

function FormInput(props) {
  const { handleChange, label, ...otherProps } = props;
  return (
    <div className="formGroup">
      <input className="formInput" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } formInputLabel`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
