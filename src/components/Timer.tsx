import { useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState<number>(0);
  const intervalIdRef = useRef<number>(0);

  const startTimer = () => {
    if (intervalIdRef.current) return;
    intervalIdRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = 0;
  };

  return (
    <div>
      <p>{timer}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default Timer;
