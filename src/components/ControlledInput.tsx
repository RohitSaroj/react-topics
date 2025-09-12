import { useRef, useState, type ChangeEvent } from "react";

const ControlledInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("Default");

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(inputValue);
  };

  console.log("ControlledInput Render");

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit ControlledInput</button>
    </>
  );
};

export default ControlledInput;
