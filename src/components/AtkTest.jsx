import React from "react";
import AtkTestChart from "./Chart/AtkTestChart";
import AtkDashBoard from "./AtkDashBoard";
const AtkTest = () => {
  return (
    <div className="">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto py-8">
        <AtkDashBoard />
        <AtkTestChart />
      </div>
    </div>
  );
};

export default AtkTest;
