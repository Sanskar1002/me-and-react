import React, { useContext } from "react";
import { Data } from "../App";
import ComponentC from "./ComponentC";
function ComponentB() {
  const data = useContext(Data);
  return (
    <div>
      <h1>Hello from Component B {data.userName}</h1>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
