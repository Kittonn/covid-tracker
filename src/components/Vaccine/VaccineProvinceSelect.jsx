import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { province } from "../../data/province";
import { provinceVaccineActions } from "../../store/provinceVaccineSlice";
import { FcHome } from "react-icons/fc";

const VaccineProvinceSelect = () => {
  const [selected, setSelected] = useState(province[0].PROVINCE_NAME);
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <FcHome size={22} />
      <label className="ml-1">เลือกจังหวัด : </label>
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
          dispatch(provinceVaccineActions.change_province(e.target.value));
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
