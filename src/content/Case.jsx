import React from "react";
import AllCase from "../components/AllCase";
import AtkTest from "../components/AtkTest";
import ProvinceCase from "../components/ProvinceCase";
import AllCaseSelect from "../components/AllCaseSelect";
const Case = () => {
  return (
    <div>
      <AllCase />
      <AllCaseSelect />
      <ProvinceCase />
      <AtkTest />
    </div>
  );
};

export default Case;
