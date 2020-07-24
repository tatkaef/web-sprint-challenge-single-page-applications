import React from "react";
import { Link } from "react-router-dom";

const styleHdr = () => {
  return {
    mainDiv: {
      display: `flex`,
      "justify-content": `space-around`,
      width: `100%`,
      "align-items": `center`,
    },

    h1: {
      color: `red`,
      "font-family": `Menlo`,
    },
  };
};

const Header = () => {
  return (
    <div className="header" style={styleHdr().mainDiv}>
      <div className="navLinks">
        <h1 style={styleHdr().h1}>LAMBDA EATS</h1>
        <Link to="/">Home</Link>
        <Link to="/help">Help</Link>
      </div>
    </div>
  );
};

export default Header;
