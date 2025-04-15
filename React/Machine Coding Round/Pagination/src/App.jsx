import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";

//API Endpoint: 'https://dummyjson.com/products?limit=500'

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const result = await response.json();
    setData(result?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.length <= 0) {
    return <div>No products found</div>;
  }

  return (
    <>
      <h1>Pagination</h1>
      <div className="product-container">
        {data?.map((ele) => {
          return (
            <ProductCard key={ele.id} title={ele.title} image={ele.thumbnail} />
          );
        })}
      </div>
    </>
  );
}

export default App;
