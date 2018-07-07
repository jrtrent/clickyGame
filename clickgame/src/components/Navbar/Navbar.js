import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <a className="nav-link" href="/clickygame">{props.title}</a>
            </li>
            <li  className="nav-item" id="score">{props.correctIncorret}</li>
        </ul>
        <ul className="nav navbar-nav navbar-right">

            <li className ="nav-item">Score:{props.score} | Top:{props.topScore}</li>
        </ul>
    </nav>
);

export default Navbar;
