import React from "react";
import AllCase from "./components/AllCase";
import Navbar from "./components/Navbar";
import AllCaseChart from "./components/Chart/AllCaseChart";
const App = () => {
  return (
    <div>
      <Navbar />
      <AllCase />
      <AllCaseChart />
    </div>
  );
};

export default App;
