import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(0);

  useEffect(() => {
    if (timerRef.current) return;
    timerRef.current = setInterval(
      () => setTimer((prevCount) => prevCount + 1),
      1000,
    );
  }, []);

  const stopTimer = () => clearInterval(timerRef.current);

  return [timer, stopTimer];
};

export default useTimer;
