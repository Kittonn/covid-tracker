import React, { useState } from "react";
import { province } from "../data/province";
import { useDispatch } from "react-redux";
import { provinceCaseActions } from "../store/provinceCaseSlice";

const ProvinceSelect = () => {
  const [selected, setSelected] = useState(province[0].PROVINCE_NAME);
  const dispatch = useDispatch();

  return (
    <div className="font-[Kanit]">
      <label>เลือกจังหวัด : </label>
      <select
        value={selected}
        onChange={(e) => {
          dispatch(provinceCaseActions.change_province(e.target.value));
          setSelected(e.target.value);
        }}
      >
        {province.map((item) => {
          return (
            <option key={item.PROVINCE_ID} value={item.PROVINCE_CODE}>
              {item.PROVINCE_NAME}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ProvinceSelect;