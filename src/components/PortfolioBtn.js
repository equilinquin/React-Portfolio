import React from "react";
import "../assets/css/style.css";

function PortfolioBtn(props) {
    return (
        <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
            <h4>{props.name}</h4>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href={props.deploy} target="_blank"><i className="fas fa-tv fa-3x"></i></a>&emsp;&emsp;
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href={props.github} target="_blank"><i className="fab fa-github-square fa-3x"></i></a>
        </div>
    )
}

export default PortfolioBtn;