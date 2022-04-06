import React from "react";
import AllCase from "./components/AllCase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AllCaseChart from "./components/Chart/AllCaseChart";
import AtkTest from "./components/AtkTest";
import ProvinceCase from "./components/ProvinceCase";
const App = () => {
  return (
    <div>
      <Navbar />
      <AllCase />
      <AllCaseChart />
      <AtkTest />
      <ProvinceCase />
      <Footer />
    </div>
  );
};

export default App;
