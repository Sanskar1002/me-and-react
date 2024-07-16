import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment (${value})`;
  });

  return (
    <>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </>
  );
}

export default App;
