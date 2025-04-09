import { useEffect, useRef, useState } from "react";
import "./App.css";

const OTP_INPUT_SIZE = 6;

function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_INPUT_SIZE).fill(""));

  // Ref is a Array of Inputs
  const refArr = useRef([]);

  useEffect(() => {
    // Focus on the first input box in the initial load
    refArr.current[0]?.focus();
  }, []);

  const handleChange = (val, index) => {
    // TRIM: Remove the leading and trailing white space
    const updatedVal = val.trim();

    // If the value is not a NUMBER then return
    if (isNaN(updatedVal)) {
      return;
    }

    const newArr = [...inputArr];
    newArr[index] = updatedVal.slice(-1); // SLICE: to accept the latest typed value
    setInputArr(newArr);

    // Focus on the next input box
    updatedVal && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    // If the current input is empty AND
    // if the "Backspace" key is pressed then shift the focus to previous input
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <h2>OTP Validation</h2>
      {inputArr.map((input, index) => {
        return (
          <input
            type="text"
            className="otp-input"
            key={index}
            // MOST IMPORTANT: Assign the ref of each input to refArr using the index
            ref={(input) => {
              return (refArr.current[index] = input);
            }}
            value={inputArr[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </>
  );
}

export default App;
