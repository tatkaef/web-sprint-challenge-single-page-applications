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
      <h1 style={styleHdr().h1}>LAMBDA EATS</h1>
      <div className="navlinks">
        <Link to="/" className="navl">
          Home
        </Link>
        <Link to="/help" className="navl">
          Help
        </Link>
      </div>
    </div>
  );
};

export default Header;
