import { Suspense, useContext } from "react";
import Context from "../context/provider";

const Practice = () => {
  const { contextValue } = useContext(Context);

  return (
    <Suspense fallback='Loading...'>
      <div>
        <h3>Practice Component:</h3>
        {contextValue}
      </div>
    </Suspense>
  );
};

export default Practice;
