import React from "react";

function ImgTag(props) {
    return (
        <img src={props.image} alt={props.altImg}></img>
    )
}

export default ImgTag;