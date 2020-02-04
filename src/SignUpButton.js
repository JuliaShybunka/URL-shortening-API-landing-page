import React, { useState } from "react";
import SignUp from "./SignUp";

const SignUpButton = () => {
  const [togglePopUp, setTogglePopUp] = useState(false);
  return (
    <>
      <button className="header__login">Login</button>
      <button
        className="header__signup"
        onClick={() => setTogglePopUp(!togglePopUp)}
      >
        Sign Up
      </button>
      {togglePopUp ? <SignUp /> : null}
    </>
  );
};

export default SignUpButton;
