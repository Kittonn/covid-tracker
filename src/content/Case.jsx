import React from "react";
import AllCase from "../components/AllCase";
import AllCaseChart from "../components/Chart/AllCaseChart";
import AtkTest from "../components/AtkTest";
import ProvinceCase from "../components/ProvinceCase";

const Case = () => {
  return (
    <div>
      <AllCase />
      <AllCaseChart />
      <ProvinceCase />
      <AtkTest />
    </div>
  );
};

export default Case;
