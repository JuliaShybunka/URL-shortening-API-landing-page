import React from "react";

const ShortenLink = () => {
  return (
    <div className="shorten-link">
      <div className="container">
        <div className="shorten-link__form">
          <form className="shorten-link__form-link">
            <div>
              <input type="text" placeholder="Shorten a link here..." />
              <button className="shorten-link__form-link-btn">
                Shorten it!
              </button>
            </div>
          </form>
        </div>
        <div className="shorten-link__list"></div>
      </div>
    </div>
  );
};

export default ShortenLink;
