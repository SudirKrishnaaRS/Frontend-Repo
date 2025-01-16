import React, { useState, useEffect } from "react";

const UseEffectHookExample: React.FC = () => {
  const [resource, setResource] = useState<string>("posts");
  const [data, setData] = useState([]);

  const fetchData = () => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [resource]);

  return (
    <div>
      <button onClick={() => setResource("posts")}>Post</button>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("comments")}>Comments</button>

      <h2>API Data</h2>
      {data.slice(0, 5).map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default UseEffectHookExample;
