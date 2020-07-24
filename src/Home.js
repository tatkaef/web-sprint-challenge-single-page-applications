import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

const stlHome = () => {
  return {
    bigP: {
      "background-image": `url('../Assets/Pizza.jpg')`,
      display: `flex`,
      "text-align": `center`,
      "flex-direction": `column`,
      "justify-content": `center`,
      height: `600px`,
    },
  };
};

const Home = () => {
  return (
    <div className="bigPhoto" style={stlHome().bigP}>
      <h2>Your favorite food, delivered while coding</h2>
      <Link to="/pizza">
        <button style={stlHome().btn}>Pizza?</button>
      </Link>
    </div>
  );
};

export default Home;
