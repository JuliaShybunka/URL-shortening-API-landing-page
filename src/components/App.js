import React from "react";
import Header from "./header/Header";
import HeaderBanner from "./header/HeaderBanner";
import ShortenLink from "./shortenLink/ShortenLink";
import About from "./about/About";
import Booster from "./footer/Booster";

function App() {
  return (
    <>
      <Header />
      <HeaderBanner />
      <ShortenLink />
      <About />
      <Booster />
    </>
  );
}

export default App;
