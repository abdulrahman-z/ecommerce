import React, { Component } from "react";

import CustomButton from "../custom-button/CustomButton";
import FormInput from "../forminput/FormInput";
import "./signIn.scss";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="signin">
        <form onSubmit={this.handleSubmit}>
          <h2 className="title">I already have an account </h2>
          <p className="loginInfo">Sign in with your email and password </p>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChangeInput}
            required
          />

          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            label="Password"
            handleChange={this.handleChangeInput}
            required
          />
          <div className="formButtons">
            <CustomButton type="submit">SIGN IN</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
