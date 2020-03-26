import React from "react";
import "./style.css";
import ImgTag from "./ImgTag";

function SkillList(props) {
    return (
        <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
            <h4>{props.name}</h4>
            <a href={props.deploy} target="_blank"><i class="fas fa-tv fa-3x"></i></a>&emsp;&emsp;
            <a href={props.github} target="_blank"><i class="fab fa-github-square fa-3x"></i></a>
        </div>
    )
}

export default SkillList;