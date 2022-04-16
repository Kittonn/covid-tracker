import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { province } from "../../Data/province";
import { province_case_type } from "../../Data/province_case_type";
import { change_data, change_type } from "../../Store/provinceCaseSlice";
import ProvinceCaseChart from "../Chart/ProvinceCaseChart";
import { FcDocument, FcHome } from "react-icons/fc";

const ProvinceCaseSelect: React.FC = () => {
  const [selected, setSelected] = useState<string>(province[0].PROVINCE_NAME);
  const [type, setType] = useState<string>(province_case_type[0].value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="mr-2 flex mb-2 ">
          <FcHome size={24} className="mr-1" />
          <label>เลือกจังหวัด : </label>
          <select
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              dispatch(change_data(e.target.value));
              setType(province_case_type[0].value);
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
        <div className="flex">
          <FcDocument size={24} className="mr-1" />
          <label>เลือกข้อมูล : </label>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              dispatch(change_type(e.target.value));
            }}
          >
            {province_case_type.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <ProvinceCaseChart selected={selected} type={type} />
    </div>
  );
};

export default ProvinceCaseSelect;
