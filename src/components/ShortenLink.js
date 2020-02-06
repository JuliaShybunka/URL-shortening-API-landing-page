import React, { useState } from "react";

const ShortenLink = () => {
  const [shortenLink, setShortenLink] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="shorten-link">
      <div className="container">
        <div className="shorten-link__form">
          <form className="shorten-link__form-link" onSubmit={handleSubmit}>
            <div>
              <input
                onChange={event => {
                  setShortenLink(event.target.value);
                }}
                type="text"
                placeholder="Shorten a link here..."
              />
              <button type="submit" className="shorten-link__form-link-btn">
                Shorten it!
              </button>

              <p></p>
            </div>
          </form>
        </div>
        <div className="shorten-link__list"></div>
      </div>
    </div>
  );
};

export default ShortenLink;
