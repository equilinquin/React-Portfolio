import React from "react";
import "../../css/style.css";
import "../../pages/AboutMe.js";
import "../../pages/Contact.js";
import "../../pages/Portfolio"

function Header() {
    return (
        <header
        class="uk-light uk-heading-medium uk-background-cover uk-text-bolder"
      >
        <h5 class="uk-text-bolder">Hello...I'm</h5>
        Elizabeth Garcia-Quilinquin
        <section class="info">
          <h4>
            <a href="index.html">About&nbsp;&nbsp;</a>
            <a href="contacts.html">&nbsp;&nbsp;Contact&nbsp;&nbsp;</a>
            <a href="portfolio.html">&nbsp;&nbsp;Portfolio</a>
          </h4>
        </section>
      </header>
    )
}

export default Header;