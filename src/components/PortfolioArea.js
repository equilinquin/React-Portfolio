import React, {Component}from "react";
import PortfolioProjectCard from "./PortfolioProjectCard";
import project from "../project.json";

class PortfolioArea extends Component {
    state = {
        project
    };

    render(){
        return(
        <div className="uk-container">
          <div
            className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match"
            uk-grid="true"
          >
            {this.state.project.map(item => (
              <PortfolioProjectCard
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
    )
    } 
}

export default PortfolioArea;
