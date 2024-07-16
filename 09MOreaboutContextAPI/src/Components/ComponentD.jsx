import React, { useContext } from "react";
import { Data } from "../App";

function ComponentD() {
  const { userName, setUserName } = useContext(Data);
  const handleOnChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <>
      <input type="text" value={userName} onChange={handleOnChange} />
    </>
  );
}

export default ComponentD;
