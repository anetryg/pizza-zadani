import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const [pizzaToppings, setPizzaToppings] = useState(toppings);
  const [chosenItem, setChosenItem] = useState(false);
  const [countToppings, setCountToppings] = useState(0);
  const [priceToppings, setPriceToppings] = useState(0);

  const handleToppingChange = (index, chosenItem) => {
    const newToppings = [...pizzaToppings];
    newToppings[index].checked = chosenItem;
    setPizzaToppings(newToppings);
    setChosenItem(chosenItem);
    price(newToppings);
  };
  const price = (toppings) => {
    let toppingsCount = 0;
    let toppingPrice = 0;
    toppings.forEach((item) => {
      if (item.checked === true) {
        toppingsCount += 1;
        toppingPrice += item.price;
      }
    });
    setCountToppings(toppingsCount);
    setPriceToppings(toppingPrice.toFixed(2));
  };

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {countToppings}, total price: {priceToppings} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            hadleCheckChange={(chosenItem) =>
              handleToppingChange(index, chosenItem)
            }
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
