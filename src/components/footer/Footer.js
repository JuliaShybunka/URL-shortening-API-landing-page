import React from "react";
import logo from "../images/logo-footer.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import instagramIcon from "../images/icon-instagram.svg";
import pinterestIcon from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__inner">
        <div className="footer__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="footer__items">
          <div className="footer__item">
            <ul>
              <li>
                <span>Features</span>
              </li>
              <li>
                <a href="/">Link Shortening</a>
              </li>
              <li>
                <a href="/">Branded Links</a>
              </li>
              <li>
                <a href="/">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <li>
                <span>Resources</span>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Developers</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul>
              <li>
                <span>Company</span>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Our Team</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Contect</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__icons">
          <a href="/">
            <img src={facebookIcon} className="footer__icon"></img>
          </a>
          <a href="/">
            <img src={twitterIcon} className="footer__icon"></img>
          </a>
          <a href="/">
            <img src={pinterestIcon} className="footer__icon"></img>
          </a>
          <a href="/">
            <img src={instagramIcon} className="footer__icon"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
