import { useState } from "react";
import "./App.css";

const OTP_INPUT_SIZE = 5;

function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_INPUT_SIZE).fill(""));

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
          />
        );
      })}
    </>
  );
}

export default App;
