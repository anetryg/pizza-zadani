import React, { useState } from "react";
import Check from "../Check";
import "./style.css";

const Topping = ({ topping, hadleCheckChange }) => {
  return (
    <div className="topping">
      <Check value={topping.checked} onChange={hadleCheckChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
