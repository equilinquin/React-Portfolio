import React from "react";
import { Link } from "react-router";
import "../../css/style.css";

function Header() {
    return (
        <header
        className="uk-light uk-heading-medium uk-background-cover uk-text-bolder"
      >
        <h5 className="uk-text-bolder">Hello...I'm</h5>
        Elizabeth Garcia-Quilinquin
        <section className="info">
          <h4>
            <Link to ="../../pages/AboutMe.js" id="aboutme">About Me&nbsp;&nbsp;</Link>
            <Link to="../../pages/Contact.js" id="contact">&nbsp;&nbsp;Contact&nbsp;&nbsp;</Link>
            <Link to="../../pages/Portfolio.js" id="portfolio">&nbsp;&nbsp;Portfolio</Link>
          </h4>
        </section>
      </header>
    )
}

export default Header;