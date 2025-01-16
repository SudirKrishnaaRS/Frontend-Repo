import React from "react";
import useCounter from "./useCounter";

const CounterHookExample: React.FC = () => {
  // Use the custom hook with initial state
  const [count, increment, decrement, reset] = useCounter(10);

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterHookExample;
