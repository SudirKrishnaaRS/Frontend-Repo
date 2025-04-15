import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import ProductCard from "./components/ProductCard/ProductCard";
import { PAGE_SIZE } from "./utils/constants";

//API Endpoint: 'https://dummyjson.com/products?limit=500'

function App() {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=500");
    const result = await response.json();
    setData(result?.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const total = data.length;
  const pageNumber = Math.ceil(total / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (num) => {
    setCurrentPage(num);
  };

  if (data.length <= 0) {
    return <div>No products found</div>;
  }

  return (
    <>
      <h1>Pagination</h1>
      {/* PAGINATION */}
      {[...Array(pageNumber).keys()].map((num, index) => {
        return (
          <button key={index} onClick={() => handlePageChange(num)}>
            {num + 1}
          </button>
        );
      })}

      <div className="product-container">
        {data?.slice(start, end).map((ele) => {
          return (
            <ProductCard key={ele.id} title={ele.title} image={ele.thumbnail} />
          );
        })}
      </div>
    </>
  );
}

export default App;
