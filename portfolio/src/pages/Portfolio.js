import React, { Component } from "react";
import PortfolioArea from "../components/PortfolioArea";
import Header from "../components/Header";
import Footer from "../components/Footer";
import project from "../project.json";

class Portfolio extends Component {
  state = {
    project
  };

  render() {
    return (
      <div>
        <Header />
        <div className="uk-container">
          <div
            className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match"
            uk-grid
          >
            {this.state.project.map(item => {
              <PortfolioArea
                name={item.name}
                image={item.image}
                deploy={item.deploy}
                github={item.github}
                altImg={item.altImg}
              />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
