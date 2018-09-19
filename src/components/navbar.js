import React from "react";

const Navbar = (props) => (

    <nav className="navbar">
        <span className="navbar-brand">Clicky Game</span>
        <span className="text-center">{props.message}</span>
        <span className="navbar-text">
            Score: <span>{props.correct}</span>&nbsp;
            Top Score: <span>{props.topscore}</span>
        </span>
    </nav>
)
export default Navbar;