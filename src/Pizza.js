import React, { useState, useEffect } from "react";
// import formSchema from '../validation/formSchema'
// import axios from 'axios'
// import * as Yup from 'yup'
import Header from "./Header";

const initialFormValues = {
  choiceOfSize: "", // choice menu
  choiceOfSauce: "", // radio button
  addToppings: {
    Pepperoni: false,
    Sausage: false,
    "Canadian Bacon": false,
    "Spicy Italian Sausage": false,
    "Grilled Chicken": false,
    Onions: false,
    "Green Pepper": false,
    "Diced Tomatos": false,
    "Black Olives": false,
    "Roasted Garlic": false,
    "Artichoke Hearts": false,
    "Three Cheese": false,
    Pineapple: false,
    "Extra Cheese": false,
  },
  // Choice of Substitute
  specialIns: "", // text input
  numbers: "", // choice menu
};

const initialFormErrors = {
  choiceOfSize: "",
  choiceOfSauce: "",
  numbers: "",
};

const initialForm = [];
const initialDisabled = true;

const Pizza = (props) => {
  return (
    <div>
      <img></img>
      <div className="form">{/* 'fill this' */}</div>
    </div>
  );
};

export default Pizza;
