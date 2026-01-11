
import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const [warnings, setWarnings] = useState([]);

  let [lengthmax, setLengthmax] = useState("true");
  let [nouppercase, setNoUppercase] = useState("true");
  let [nolowercase, setNoLowercase] = useState("true");
  let [nosymbols, setNoSymbols] = useState("true");
  let [nonumber, setNonumber] = useState("true");
  let [space, setSpace] = useState("false");

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      // Set initial warnings on first render
      setWarnings([
        "Length should be more than 8",
        "Should have at least 1 uppercase letter",
        "Should have at least 1 lowercase letter",
        "Should have at least 1 symbol",
        "Should have at least 1 number",
        "Should not have space",
      ]);
      isInitialMount.current = false;
    }
  }, []);

  const checkPass = () => {
    let password = document.getElementById("password").value;

    // Check all conditions first
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpace = password.includes(" ");

    // Set states
    setLengthmax(hasLength ? "false" : "true");
    setNoUppercase(hasUppercase ? "false" : "true");
    setNoLowercase(hasLowercase ? "false" : "true");
    setNoSymbols(hasSymbols ? "false" : "true");
    setNonumber(hasNumber ? "false" : "true");
    setSpace(hasSpace ? "true" : "false");

    // Create warnings using the CURRENT values
    const newWarnings = [];

    if (!hasLength) newWarnings.push("Length should be more than 8");
    if (!hasUppercase)
      newWarnings.push("Should have at least 1 uppercase letter");
    if (!hasLowercase)
      newWarnings.push("Should have at least 1 lowercase letter");
    if (!hasSymbols) newWarnings.push("Should have at least 1 symbol");
    if (!hasNumber) newWarnings.push("Should have at least 1 number");
    if (hasSpace) newWarnings.push("Should not have space");

    setWarnings(newWarnings);
  };


  return (
    <div className="h-screen w-full bg-[#e6e6e6] flex justify-center items-center">
      <div className="w-[50%] h-[70%] bg-[##FFFFFF] shadow-2xl shadow-zinc-500 rounded-2xl overflow-hidden flex flex-col items-center">
        <div className="flex w-full flex-col gap-2 items-center justify-center">
          <h1 className="text-[#3B82F6] mt-10 text-3xl font-bold">
            PassStrength
          </h1>
          <p className="text-[#3b83f6da] text-lg">
            Strength-test your secret before the hackers do.
          </p>
        </div>
        <div className="mt-12 w-[80%]">
          <div className="flex items-center justify-between">
            <p className="text-[#3B82F6] font-semibold">Password: </p>
            <input
              type="text"
              placeholder="Enter your password here..."
              className="w-[86%] h-10 p-2 outline-none text-[#3B82F6] border-2 border-[#3B82F6] rounded-lg"
              id="password"
              onInput={checkPass}
            />
          </div>
          <ul className="text-[#EC4899] list-disc w-[80%] ml-4 mt-8">
            {warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App