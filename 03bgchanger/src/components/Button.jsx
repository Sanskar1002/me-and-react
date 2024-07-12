import React from "react";
import { useState } from "react";

function Button({ color, setBgColor }) {
  const bgChanger = () => {
    setBgColor(color);
  };
  return (
    <div>
      <button
        className="outline-none px-4 py-2 rounded-3xl text-black"
        style={{ backgroundColor: color }}
        onClick={bgChanger}
      >
        {color}
      </button>
    </div>
  );
}

export default Button;
