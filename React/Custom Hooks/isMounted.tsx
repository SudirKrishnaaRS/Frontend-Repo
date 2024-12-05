import { useEffect, useState } from "react";
// Custom hook to know if the Component isMounted or not
export const useMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

// Using the Hook
const isMounted = useMounted();
