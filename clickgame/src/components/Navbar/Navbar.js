import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <a className="nav-link" href="/clickygame">{props.title}</a>
            </li>
            <li  class="nav-item" id="score">{props.correctIncorret}</li>
        </ul>
        <ul class="nav navbar-nav navbar-right">

            <li className ="nav-item">Score:{props.score} | Top:{props.topScore}</li>
        </ul>
    </nav>
);

export default Navbar;
