import React from "react";
import "./Title.css";

const Title = props =>
    <div className="title">
        <h1>{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
    </div>


export default Title;