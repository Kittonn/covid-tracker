import React from "react";
import AllCase from "./components/AllCase";
import Navbar from "./components/Navbar";
import SelectBox from "./components/SelectBox";
import Footer from "./components/Footer";
// import AllCaseChart from "./components/Chart/AllCaseChart";
// import AtkTest from "./components/AtkTest";
const App = () => {
  return (
    <div>
      <Navbar />
      <AllCase />
      {/* <AllCaseChart /> */}
      {/* <AtkTest /> */}
      <SelectBox />
      <Footer />
    </div>
  );
};

export default App;
