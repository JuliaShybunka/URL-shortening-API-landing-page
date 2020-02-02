import React from "react";
import logo from "./images/logo.svg";

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
          <button className="header__login">Login</button>
          <button className="header__signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
