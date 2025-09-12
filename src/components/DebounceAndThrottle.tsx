import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useThrottle from "../hooks/useThrottle";

const DebounceAndThrottle = () => {
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const debouncedValue = useDebounce(value);
  const throttledValue = useThrottle(value2);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text to be debounced"
        onChange={(e) => {
          setValue(e.target.value);
          setValue2(e.target.value);
        }}
      />
      <br />
      Debounced Value: <strong>{debouncedValue}</strong>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;Throttled Value:{" "}
      <strong>{throttledValue}</strong>
    </div>
  );
};

export default DebounceAndThrottle;