import React from "react";
import "../assets/css/style.css";
import PortfolioBtn from "./PortfolioBtn";
import ImgTag from "./ImgTag";

function PortfolioProjectCard(props) {
    return (
        <div className="uk-text-center">
            <div className="uk-inline-clip uk-transition-toggle" tabindex="0">
                <ImgTag 
                  image = {props.image}
                  altImg = {props.altImg}
                />
                <PortfolioBtn 
                  name = {props.name}
                  deploy = {props.deploy}
                  github = {props.github}
                />
           </div>
        </div>

    )
}

export default PortfolioProjectCard;