import React, { Component } from "react";
import PortfolioArea from "../components/PortfolioArea";
import project from "../project.json";
import "../assets/css/style.css"

class Portfolio extends Component {
  state = {
    project
  };

  render() {
    return (
        <div className="uk-container">
          <div
            className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match"
            uk-grid
          >
            {this.state.project.map(item => (
              <PortfolioArea
                key={item.id}
                name={item.name}
                image={item.image}
                deploy={item.deploy}
                github={item.github}
                altImg={item.altImg}
              />
            ))}
          </div>
        </div>
    );
  }
}

export default Portfolio;
