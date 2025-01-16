import React, { useMemo, useState } from "react";

const UseMemoHookExample: React.FC = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  //   useMemo memoizes the result and will recompute only when it's dependencies change
  const isEven = useMemo(() => {
    // mimick a expensive calculation
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={() => setCounterOne((prevCount) => prevCount + 1)}>
          Counter One : {counterOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>

      <div>
        <button onClick={() => setCounterTwo((prevCount) => prevCount + 1)}>
          Counter Two : {counterTwo}
        </button>
      </div>
    </div>
  );
};

export default UseMemoHookExample;
