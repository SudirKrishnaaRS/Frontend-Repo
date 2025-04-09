import { useState } from "react";
import "./App.css";

const OTP_INPUT_SIZE = 5;

function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_INPUT_SIZE).fill(""));

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
  };

  return (
    <>
      <h2>OTP Validation</h2>
      {inputArr.map((input, index) => {
        return (
          <input
            type="text"
            className="otp-input"
            value={inputArr[index]}
            key={index}
            onChange={(e) => handleChange(e.target.value, index)}
          />
        );
      })}
    </>
  );
}

export default App;
