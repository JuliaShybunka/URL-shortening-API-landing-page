import React from "react";
import Header from "./header/Header";
import HeaderBanner from "./header/HeaderBanner";
import ShortenLink from "./shortenLink/ShortenLink";
import About from "./about/About";

function App() {
  return (
    <>
      <Header />
      <HeaderBanner />
      <ShortenLink />
      <About />
    </>
  );
}

export default App;
