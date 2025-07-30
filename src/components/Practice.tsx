import { Suspense, useContext, useState } from "react";
import Context from "../context/provider";
import useDebounce from "../hooks/useDebounce";
import useThrottle from "../hooks/useThrottle";

const Practice = () => {
  const { contextValue } = useContext(Context);
  const [value, setValue] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const debouncedValue = useDebounce(value);
  const throttledValue = useThrottle(value2);

  return (
    <Suspense fallback="Loading...">
      <div>
        <h3>Practice Component:</h3>
        {contextValue}
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
          <script src="practice.js"></script>
        </div>
      </div>
    </Suspense>
  );
};

export default Practice;
