import React from "react";
import logo from "./images/logo.svg";
import SignUpButton from "./SignUpButton";

const Header = () => {
  return (
    <div>
      <div className="container header__inner">
        <nav className="header__nav">
          <div className="header__logo">
            <img src={logo} alt="logo"></img>
          </div>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </nav>
        <div className="header__registration">
          <SignUpButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
