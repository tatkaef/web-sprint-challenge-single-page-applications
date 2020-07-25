import React from "react";

function Pizzalist({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza&apos;s details...</h3>;
  }

  return (
    <div className="pizzaorder-container">
      <h2>{details.username}</h2>
      <p>Choice of Size: {details.choiceOfSize}</p>
      <p>Choice of Sauce : {details.choiceOfSauce}</p>
      {!!details.addToppings && !!details.addToppings.length && (
        <div>
          Add toppings:
          <ul>
            {details.addToppings.map((like, idx) => (
              <li key={idx}>{like}</li>
            ))}
          </ul>
        </div>
      )}
      <p>Special Instructons: {details.specialIns}</p>
      <p>You ordered{details.numbers} Pizzas</p>
    </div>
  );
}

export default Pizzalist;
