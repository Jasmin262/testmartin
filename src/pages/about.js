import React from "react";
import MyJumbotron from "../components/MyJumbotron";

function About() {
  return (
    <MyJumbotron
      title="About"
      subTitle="Here you'll find all information about us."
      btnText="Contact"
      btnLink="/contact"
    />
  );
}

export default About;
