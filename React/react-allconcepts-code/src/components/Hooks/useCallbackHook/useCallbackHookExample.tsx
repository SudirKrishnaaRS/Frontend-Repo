import React, { useState, useCallback } from "react";
import CustomButton from "./CustomButton";

const UseCallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");

  //   Without useCallback each time CustomButton Comp is re-rendered
  //   as handleIncrement is getting reinstantiated and
  //   the referential equality would be diffrent so it would consider as the prop change `onClickHandler` so it will be unneccessary render
  //   Solution: useCallback() along with React.memo
  //   const handleIncrement = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  // useCallback memoizes the function to prevent it from being recreated
  // unless `count` changes.
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div>
      <h3>useCallback Example</h3>
      <CustomButton onClickHandler={handleIncrement}>
        Increment Count
      </CustomButton>
      <p>Count: {count}</p>
      <input
        type="text"
        placeholder="Type something"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default UseCallbackExample;
