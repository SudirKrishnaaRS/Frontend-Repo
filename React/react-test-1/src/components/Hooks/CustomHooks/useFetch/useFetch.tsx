import { useEffect, useState } from "react";

// HINT:
// TypeScript might misinterpret <T> as the start of a JSX tag instead of a generic.
// This happens because JSX syntax and generic syntax can look very similar.

// Solution:
// Adding a comma (<T,>) clarifies that you're specifying a generic type and not writing JSX.

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | unknown[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const apiData = await response.json();
        setData(apiData);
        setHasError(false);
      } catch (err) {
        console.log("Error fetching data, error: " + err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, isLoading, hasError];
};

export default useFetch;
