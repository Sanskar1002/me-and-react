import "./App.css";
import React, { useState } from "react";

function App() {
  // const counter = 5;
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // counter += 1;
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert(" Do go up beta ");
    }
    // console.log(counter);
  };

  const decValue = () => {
    if (counter <= 0) {
      alert("Value can't be negative");
    } else {
      setCounter(counter - 1);
    }
  };
  // counter = 2;
  return (
    <>
      <h1>Hello Reacters</h1>
      <p>Increse and decrease by clicking the buttons</p>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase</button>
      <button onClick={decValue}>Decrease</button>
    </>
  );
}

export default App;
