import { useRef } from "react";

const UncontrolledInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    alert(inputRef.current?.value);
  };

  console.log("UncontrolledInput Render");

  return (
    <>
      <input ref={inputRef} defaultValue="hello" />
      <button onClick={handleSubmit}>Submit UncontrolledInput</button>
    </>
  );
};

export default UncontrolledInput;
