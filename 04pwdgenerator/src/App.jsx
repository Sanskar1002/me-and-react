import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const copyToClipBoard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "012356789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, setPassword]);

  const passRef = useRef(null);
  return (
    <>
      <div className="w-full h-screen bg-fuchsia-800 flex flex-col justify-center gap-3">
        <h1 className="text-white text-4xl p-5 text-center">
          Password Generator
        </h1>

        <div className="flex flex-col gap-4 w-full max-w-xl  bg-zinc-800 px-7 py-7 text-white mx-auto">
          <div className="flex align-middle justify-center">
            <input
              className="px-2 py-1 outline-none text-black w-full"
              type="text"
              value={password}
              placeholder="Generate Password"
              readOnly
              ref={passRef}
            />
            <button
              className="bg-blue-600 text-white px-4 py-1"
              onClick={copyToClipBoard}
            >
              Copy
            </button>
          </div>
          <div className="flex gap-4 align-middle">
            <input
              type="range"
              min={6}
              max={100}
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label>Length :{length}</label>
          </div>

          <div className="flex gap-4 align-middle">
            <input
              type="checkbox"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-4 align-middle">
            <input
              type="checkbox"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Special Character</label>
          </div>
        </div>
        {/* solution 1 for printing password  */}
        {/* <button onClick={passwordGenerator}> click me</button> */}
      </div>
    </>
  );
}

export default App;
