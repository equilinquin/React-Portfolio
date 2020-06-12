import React from "react";
//import { Link } from "react-router-dom"
import "../assets/css/style.css";
import pdf from "../assets/img/Resume.pdf"

function AboutMeContactMe() {
  return (
    <div className="connect uk-light uk-background-cover uk-column-1-2">
      <div className="uk-card uk-card-body">
        <h3 className="uk-card-title">View my resume here</h3>
        <a href= { pdf } target="_blank">
          <i className="fas fa-file-pdf fa-2x"></i>
        </a>
      </div>
      <div className="uk-card uk-card-body">
        <h3 className="uk-card-title">Find me here</h3>
          <a
            href="https://www.linkedin.com/in/elizabeth-garcia-quilinquin-207834191/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/equilinquin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
      </div>
    </div>
  );
}

export default AboutMeContactMe;
