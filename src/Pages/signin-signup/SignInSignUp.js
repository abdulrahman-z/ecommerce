import React from "react";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";
import "./signInSignUp.scss";

function SignInSignUp(props) {
  return (
    <div className="sign-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInSignUp;
