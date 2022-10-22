import React, { useState } from "react";
import "./style.css";

const Check = ({ value, onChange }) => {
  const handleClick = () => {
    onChange(!value);
  };

  return (
    <button className="check" onClick={handleClick}>
      {value ? "✓" : ""}
    </button>
  );
};

export default Check;
