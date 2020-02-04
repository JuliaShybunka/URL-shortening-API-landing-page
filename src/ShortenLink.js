import React from "react";

const ShortenLink = () => {
  return (
    <div className="shorten-link">
      <div className="container">
        <div className="shorten-link__form">
          <form>
            <input type="text" />
            <button>Shorten it!</button>
          </form>
        </div>
        <div className="shorten-link__list"></div>
      </div>
    </div>
  );
};

export default ShortenLink;
