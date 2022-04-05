import React from "react";
import AllCase from "./components/AllCase";
import Navbar from "./components/Navbar";
import AllCaseChart from "./components/Chart/AllCaseChart";
import AtkTest from "./components/AtkTest";
const App = () => {
  return (
    <div>
      <Navbar />
      <AllCase />
      <AllCaseChart />
      <AtkTest />
    </div>
  );
};

export default App;
