//import Practice from "../components/Practice";
import React from "react";
const Practice = React.lazy(() => import("../components/Practice"));

const LandingPage = () => {
  return (
    <>
      <Practice />
    </>
  );
};

export default LandingPage;
