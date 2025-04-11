import { useEffect, useState } from "react";
import "./App.css";

// API: 'https://dummyjson.com/recipes/search?q=Margherita'

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${searchVal}`
    );
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, [searchVal]);

  return (
    <>
      <h2>Autocomplete Search Bar</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="search here..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <div className="search-results-container">
        {data?.recipes?.map((ele) => {
          return (
            <span key={ele.id} className="search-result">
              {ele.name}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default App;
