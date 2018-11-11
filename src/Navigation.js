import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navigation.css";

function Navigation(props) {

    return (
        <nav className="Header-Nav">
            <ul className="Header-Nav-List" onClick={props.handleClick}>
                <li className="Nav-List-Item"><Link to="/">Home</Link></li>
                <li className="Nav-List-Item"><Link to="/tools">Tools</Link></li>
                <li className="Nav-List-Item"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;