import { useState } from "react";

const useCounter = (
  initialState: number
): [number, () => void, () => void, () => void] => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialState);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
