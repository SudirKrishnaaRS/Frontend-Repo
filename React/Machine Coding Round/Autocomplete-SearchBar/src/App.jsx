import { useEffect, useState } from "react";
import "./App.css";

// API Endpoint: 'https://dummyjson.com/recipes/search?q=Margherita'

function App() {
  const [searchVal, setSearchVal] = useState("");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchVal}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Debouncing : SIMPLY Just use timeout with clearTimer
    const timer = setTimeout(() => fetchData(), 300);

    return () => {
      clearTimeout(timer);
    };
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
        onFocus={() => setShowSearchResult(true)}
        onBlur={() => setShowSearchResult(false)}
      />
      <ul className="search-results-container">
        {showSearchResult &&
          data?.recipes?.map((ele) => {
            return (
              <li key={ele.id} className="search-result">
                {ele.name}
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
