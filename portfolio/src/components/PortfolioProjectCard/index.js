import React from "react";
import "./style.css";
import SkillList from "./SkillList";
import ImgTag from "./ImgTag";

function PortfolioProjectCard(props) {
    return (
        <div class="uk-text-center">
            <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                <ImgTag 
                  image = {props.name}
                  altImg = {props.altImg}
                />
                <SkillList 
                  name = {props.name}
                  deploy = {props.deploy}
                  github = {props.github}
                />
        </div>
        </div>

    )
}

export default PortfolioProjectCard;