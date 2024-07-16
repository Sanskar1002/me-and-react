import { createContext, useState } from "react";
import ComponentA from "./Components/componentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";
import ComponentD from "./Components/ComponentD";

export const Data = createContext();
function App() {
  const [userName, setUserName] = useState("");
  return (
    <>
      <Data.Provider value={{ userName, setUserName }}>
        <ComponentA />
        {/* <ComponentB />
        <ComponentC />
        <ComponentD /> */}
      </Data.Provider>
    </>
  );
}

export default App;
