import { useEffect, useState } from "react";

const useDebounce = (value: string, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => setDebouncing(), [value, delay]);

  const setDebouncing = () => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  };

  return debouncedValue;
};

export default useDebounce;
