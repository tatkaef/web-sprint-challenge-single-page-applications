import React from "react";

const PizzaForm = (props) => {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    inputChange(name, value);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Buld Your Own Pizza</h2>

        <div className="errors">
          <div>{errors.choiceOfSize}</div>
          <div>{errors.choiceOfSauce}</div>
          <div>{errors.addToppings}</div>
          <div>{errors.numbers}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <label>
          Name&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name="name"
            type="text"
          />
        </label>

        <label>
          Choice of Size&nbsp;
          <select
            id="size"
            name="size"
            value={values.choiceOfSize}
            onChange={onInputChange}
            name="choiceOfSize"
            type="size"
          >
            <option value="12">12"</option>
            <option value="14">14"</option>
            <option value="24">24"</option>
            <option value="26">26"</option>
          </select>
        </label>
        <div className="sousegroup">
          <h4>Choice of Sauce:</h4>

          <label>
            Original Red
            <input
              type="radio"
              name="originalRed"
              value="Original Red"
              checked={values.choiceOfSauce === "Original Red"}
              onChange={onInputChange}
            />
          </label>
          <label>
            Garlic Ranch
            <input
              type="radio"
              name="garlicRanch"
              value="Garlic Ranch"
              checked={values.choiceOfSauce === "Garlic Ranch"}
              onChange={onInputChange}
            />
          </label>
          <label>
            BBQ Sauce
            <input
              type="radio"
              name="bBQSauce"
              value="BBQ Sauce"
              checked={values.choiceOfSauce === "BBQ Sauce"}
              onChange={onInputChange}
            />
          </label>
          <label>
            Spinach Alfredo
            <input
              type="radio"
              name="spinachAlfredo"
              value="Spinach Alfredo"
              checked={values.choiceOfSauce === "Spinach Alfredo"}
              onChange={onInputChange}
            />
          </label>
        </div>

        <div className="toppingsgroup">
          <h4>Add toppings</h4>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.addToppings.pepperoni === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.addToppings.sausage === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Canadian Bacon
            <input
              type="checkbox"
              name="canadianBacon"
              checked={values.addToppings.canadianBacon === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Spicy Italian Sausage
            <input
              type="checkbox"
              name="spicyItalianSausage"
              checked={values.addToppings.spicyItalianSausage === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Grilled Chicken
            <input
              type="checkbox"
              name="grilledChicken"
              checked={values.addToppings.grilledChicken === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Onions
            <input
              type="checkbox"
              name="onions"
              checked={values.addToppings.onions === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Green Pepper
            <input
              type="checkbox"
              name="greenPepper"
              checked={values.addToppings.greenPepper === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Diced Tomatos
            <input
              type="checkbox"
              name="dicedTomatos"
              checked={values.addToppings.dicedTomatos === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Black Olive
            <input
              type="checkbox"
              name="blackOlive"
              checked={values.addToppings.blackOlive === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Roasted Garlic
            <input
              type="checkbox"
              name="roastedGarlic"
              checked={values.addToppings.roastedGarlic === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Artichoke Hearts
            <input
              type="checkbox"
              name="artichokeHearts"
              checked={values.addToppings.artichokeHearts === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Three Cheese
            <input
              type="checkbox"
              name="threeCheese"
              checked={values.addToppings.threeCheese === true}
              onChange={onCheckboxChange}
            />
          </label>
          <label>
            Pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={values.addToppings.pineapple === true}
              onChange={onCheckboxChange}
            />
          </label>
        </div>

        <label>
          Special Instructons&nbsp;
          <input
            value={values.specialIns}
            onChange={onInputChange}
            name="specialIns"
            type="text"
          />
        </label>

        <label>
          <input type="number" id="quantity" name="numbers" min="1" max="20" />
          <button type="submit" disabled={disabled}>
            Add to Order $17.99
          </button>
        </label>
      </div>
    </form>
  );
};

export default PizzaForm;
