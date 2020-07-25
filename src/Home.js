import React, { useState, useEffect } from "react";

import { Switch, Route, Link } from "react-router-dom";

const stlHome = () => {
  return {
    bigP: {
      "background-image": `url(https://static.agrodolce.it/app/uploads/2016/02/pizza-napoletana.jpg)`,
      "background-size": `auto`,
      display: `flex`,
      "text-align": `center`,
      "flex-direction": `column`,
      "justify-content": `center`,
      "justify-items": `center`,
      height: `600px`,
    },
  };
};

const Home = () => {
  return (
    <div className="bigPhoto" style={stlHome().bigP}>
      <h1>Your favorite food, delivered while coding</h1>
      <Link to="/pizza">
        <button style={stlHome().btn}>Pizza?</button>
      </Link>
    </div>
  );
};

export default Home;
