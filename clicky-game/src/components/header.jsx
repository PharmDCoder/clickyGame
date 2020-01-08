import React, { Component } from "react";

function Header(props) {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark justify-content-end">
      <span className="navbar-brand">
        Score: {props.score} | Top Score: {props.topScore}
      </span>
    </nav>
  );
}

export default Header;
