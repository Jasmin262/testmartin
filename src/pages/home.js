import React from "react";
import MyJumbotron from "../components/MyJumbotron";

function Home({ posts }) {
  return (
    <MyJumbotron
      title="Home"
      subTitle="Welcome to our page."
      btnText="About"
      btnLink="/about"
    />


   // link auf button (memegenerator)
  );
}

export default Home;
