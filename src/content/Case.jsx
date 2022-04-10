import React from "react";
import AllCase from "../components/Covid/AllCase";
import AtkTest from "../components/Covid/AtkTest";
import ProvinceCase from "../components/Covid/ProvinceCase";
import AllCaseSelect from "../components/Covid/AllCaseSelect";
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
