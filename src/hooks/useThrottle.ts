import { useEffect, useRef, useState } from "react";

const useThrottle = <T>(value: T, limit = 1000): T => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => setThrottling(), [value, limit]);

  const setThrottling = () => {
    const timeDiffFromLastRun = Date.now() - lastRan.current;

    const timer = setTimeout(() => {
      if (timeDiffFromLastRun >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - timeDiffFromLastRun);

    return () => clearTimeout(timer);
  };

  return throttledValue;
};

export default useThrottle;
