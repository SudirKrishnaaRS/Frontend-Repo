import { useState, useEffect } from "react";
import "./App.css";
import { PAGE_SIZE } from "./utils/constants";
import Pagination from "./components/Pagination/Pagination";
import ProductCard from "./components/ProductCard/ProductCard";

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

  if (data.length <= 0) {
    return <div>No products found</div>;
  }

  return (
    <>
      <h1>Pagination</h1>

      {/* PAGINATION */}
      <Pagination
        pageNumber={pageNumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="showing-supportLabel">
        {`Showing ${currentPage + 1} of ${pageNumber} pages`}{" "}
      </div>
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
