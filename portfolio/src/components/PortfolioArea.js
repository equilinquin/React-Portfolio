import React from "react";
import PortfolioProjectCard from "./PortfolioProjectCard";

function PortfolioArea(props) {
    return (
        <PortfolioProjectCard
            name = {props.name}
            image = {props.image}
            deploy = {props.deploy}
            github = {props.github}
            altImg = {props.altImg}
        />
    )
}

export default PortfolioArea;
