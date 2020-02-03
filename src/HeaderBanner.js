import React from "react";
import BannerImage from "./images/illustration-working.svg";

const HeaderBanner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__info">
          <div className="banner__info-title">More than just shorter links</div>
          <div className="banner__info-text">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </div>
          <button className="banner__info-btn">Get Started</button>
        </div>
        <div className="banner__image">
          <img src={BannerImage} alt="Banner image" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
