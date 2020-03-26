import React from "react";
//import Router from "react-router-dom"
import "../assets/css/style.css";
import AboutMeInfo from "./AboutMeInfo";
import AboutMeContactMe from "./AboutMeContactMe";
import SkillList from "./SkillList";

function AboutMeArea() {
  return (
    <div className="uk-container">
      <AboutMeInfo />
      <SkillList />
      <AboutMeContactMe />
    </div>
  );
}

export default AboutMeArea;
