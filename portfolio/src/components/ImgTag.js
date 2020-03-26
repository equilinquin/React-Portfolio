import React from "react";
import "../assets/css/style.css";

function ImgTag(props) {
    return (
        <img src={props.image} alt={props.altImg}></img>
    )
}

export default ImgTag;