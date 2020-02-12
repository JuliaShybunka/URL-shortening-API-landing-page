import React from "react";
import Logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__inner">
        <div className="footer__logo">
          <svg src={Logo} alt="logo"></svg>
        </div>
        <div className="footer__items">
          <div className="footer__item">
            <ul>
              <li>
                <span>Features</span>
              </li>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <li>
                <span>Resources</span>
              </li>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <li>
                <span>Company</span>
              </li>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contect</li>
            </ul>
          </div>
        </div>
        <div className="footer__icons">
          <div className="footer__icon"></div>
          <div className="footer__icon"></div>
          <div className="footer__icon"></div>
          <div className="footer__icon"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
