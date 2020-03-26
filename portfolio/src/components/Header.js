import React from "react";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
      <header className="uk-light uk-heading-medium uk-background-cover uk-text-bolder">
        <h5 className="uk-text-bolder">Hello...I'm</h5>
        Elizabeth Garcia-Quilinquin
        <section className="info">
          <h4>
            <Link to="/" id="aboutme">
              About Me&nbsp;&nbsp;
            </Link>
            <Link to="/contact" id="contact">
              &nbsp;&nbsp;Contact&nbsp;&nbsp;
            </Link>
            <Link to="/portfolio" id="portfolio">
              &nbsp;&nbsp;Portfolio
            </Link>
          </h4>
        </section>
      </header>
  );
}

export default Header;
