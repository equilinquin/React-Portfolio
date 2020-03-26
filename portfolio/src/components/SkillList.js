import React from "react"
import "../assets/css/style.css"

function SkillList() {
    return (
        <div className="skills uk-light">
        <div className="header">
          <h2>Skills in:</h2>
        </div>
        <div
          className="uk-position-relative uk-visible-toggle"
          id="skills"
          tabindex="-1"
          uk-slider
        >
          <ul
            className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m"
          >
            <li>
              <h3><i className="fab fa-html5">&nbsp;HTML</i></h3>
            </li>
            <li>
              <h3><i class="fab fa-css3-alt">&nbsp;CSS</i></h3>
            </li>
            <li>
              <h3><i className="fab fa-js-square">&nbsp;Javascript</i></h3>
            </li>
            <li>
              <h3><i className="fab fa-js-square">&nbsp;jQuery</i></h3>
            </li>
            <li>
              <h3><i className="fas fa-network-wired">&nbsp;API</i></h3>
            </li>
            <li>
              <h3><i className="fab fa-node">&nbsp;Node</i></h3>
            </li>
            <li>
              <h3><i className="fab fa-node-js">&nbsp;Express</i></h3>
            </li>
            <li>
              <h3><i className="fas fa-database">&nbsp;MySQL</i></h3>
            </li>
            <li>
              <h3><i className="fas fa-server">&nbsp;Sequelize</i></h3>
            </li>
            <li>
              <h3><i className="fas fa-sitemap">&nbsp;MVC</i></h3>
            </li>
          </ul>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>
      </div>
    )
}

export default SkillList;