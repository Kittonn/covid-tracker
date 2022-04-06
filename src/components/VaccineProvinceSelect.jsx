import React, { useState } from "react";
import { province } from "../data/province";

const VaccineProvinceSelect = () => {
  const [selected, setSelected] = useState(province[0].PROVINCE_NAME);
  return (
    <div>
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        {province.map((item) => {
          return (
            <option key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
              {item.PROVINCE_NAME}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default VaccineProvinceSelect;
