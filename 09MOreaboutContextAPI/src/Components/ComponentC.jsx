import React, { useContext } from "react";
import { Data } from "../App";

function ComponentC() {
  const data = useContext(Data);
  return (
    <div>
      <h1>Hello from Component C {data.userName}</h1>
    </div>
  );
}

export default ComponentC;
