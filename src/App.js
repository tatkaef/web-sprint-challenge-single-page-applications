import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Switch, Route } from "react-router-dom";
import FormSchema from "./FormSchema";

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
const initialFormValues = {
  username: "",
  choiceOfSize: "", // choice menu
  choiceOfSauce: "", // radio button
  addToppings: {
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    Onions: false,
    greenPepper: false,
    dicedTomatos: false,
    blackOlive: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    "Extra Cheese": false,
  },
  // Choice of Substitute
  specialIns: "", // text input
  numbers: "", // choice menu
  i: 0,
};

const initialFormErrors = {
  username: "",
  choiceOfSize: "",
  choiceOfSauce: "",
  numbers: "",
};

const initialPizza = [];
const initialDisabled = true;

const App = () => {
  const [pizza, setPizza] = useState([initialPizza]);
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled);

  const getPizza = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setPizza(response.data.data);
        console.log("DATA is", response.data.data);
      })
      .catch((err) => console.log("err GET Pizza", err));
  };

  const postNewPizzaOrder = (newPizzaOrder) => {
    axios
      .post("https://reqres.in/api/users", newPizzaOrder)
      .then((res) => {
        setPizza([res.data, ...pizza]);
        setFormValues(initialFormValues);
      })
      .catch((err) => console.log("err POST forms", err));
  };
  const inputChange = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      addToppings: {
        ...formValues.addToppings,
        [name]: isChecked,
      },
    });
  };

  const submit = (e) => {
    const newPizzaOrder = {
      username: formValues.username.trim(),
      choiceOfSize: formValues.choiceOfSize.trim(),
      choiceOfSauce: formValues.choiceOfSauce,
      addToppings: Object.keys(formValues.addToppings).filter(
        (top) => formValues.addToppings[top]
      ),
      specialIns: formValues.specialIns.trim(),
      numbers: formValues.numbers,
    };
    console.log(newPizzaOrder);
    postNewPizzaOrder(newPizzaOrder);
  };

  useEffect(() => {
    getPizza();
  }, []);

  useEffect(() => {
    FormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="maindiv" style={styleAll().mainDiv}>
      <Header />

      <Switch>
        {/* <Route path="/pizzalist">
            <Pizzalist items={pizzaList}/>
          </Route>         */}

        <Route
          path="/pizza"
          component={() => (
            <Pizza
              values={formValues}
              inputChange={inputChange}
              checkboxChange={checkboxChange}
              submit={submit}
              disabled={disabled}
              errors={formErrors}
            />
          )}
        />

        <Route exact path="/" component={Home} />
      </Switch>
    </div> //main div
  );
};
export default App;
