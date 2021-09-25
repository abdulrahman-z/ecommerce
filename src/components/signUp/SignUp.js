import React, { Component } from "react";
import FormInput from "../forminput/FormInput";
import "./signUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return (
      <div>
        <form>
          <h2>i don't have an account</h2>
          <p>sign up with your email and password</p>
          <FormInput />
        </form>
      </div>
    );
  }
}

export default SignUp;
