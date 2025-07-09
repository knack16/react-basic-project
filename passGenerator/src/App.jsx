import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  //ref Hook

  const passRef = useRef(null);

  const passwordGenerator = () => {
    let pass = "";
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumber) {
      string += "0123456789";
    }
    if (char) {
      string += "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPass(pass);
  };

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 6); // For mobile devices
    window.navigator.clipboard.writeText(pass)
  }, [pass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, includeNumber, char, setPass]);

  return (
    <>
      <div className="w-full max-w-md mx-auto mt-10 rounded-lg shadow-md px-4 my8 text-white bg-blue-400">
        <h1 className="text-3xl text-center font-bold ">Password Generator</h1>
        <div className="flex shadow-md overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-5 bg-white my-5 rounded-l-3xl text-black"
            placeholder="password"
            ref={passRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-1 my-5 rounded-r-3xl cursor-pointer">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 my-2 py-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-white">{length}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={includeNumber}
              id="numberInput"
              onChange={() => {
                setIncludeNumber((prev) => !prev);
              }}
            />
            <span className="text-white">Numbers</span>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <span className="text-white">Charecter</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
