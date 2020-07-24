import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Pizza from "./Pizza";
// import Pizzalist from "./Pizzalist";

const styleAll = () => {
  return {
    mainDiv: {
      display: `flex`,
      "justify-content": `center`,
      width: `100%`,
    },
    btn: {
      width: `200px`,
      display: `flex`,
    },
  };
};

const App = () => {
  const [pizzaList, setpizzaList] = useState([]);

  return (
    <div style={styleAll().mainDiv}>
      <Header />

      <Switch>
        {/* <Route path="/pizza">
            <Pizzalist items={pizzaList}/>
          </Route>         */}

        <Route path="/pizza" component={Pizza} />

        <Route exact path="/" component={Home} />
      </Switch>
    </div> //main div
  );
};
export default App;
