import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import { Data } from "../App";
function ComponentA() {
  const { userName, setUserName } = useContext(Data);
  const handleOnChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <>
      <input type="text" value={userName} onChange={handleOnChange} />
      <ComponentB />
    </>
  );
}

export default ComponentA;
