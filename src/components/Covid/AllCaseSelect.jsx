import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { type } from "../../data/type";
import { alldayActions } from "../../store/alldayCaseSlice";
import AllCaseChart from "../Chart/AllCaseChart";
import { FcDocument } from "react-icons/fc";

const AllCaseSelect = () => {
  const [selected, setSelected] = useState(type[0].value);
  const dispatch = useDispatch();
  return (
    <div className="font-[Kanit]">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto py-8">
        <div className="flex">
          <FcDocument size={24} className="mr-1" />
          <label>เลือกข้อมูล : </label>
          <select
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              dispatch(alldayActions.change(e.target.value));
            }}
          >
            {type.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
        <AllCaseChart selected={selected} />
      </div>
    </div>
  );
};

export default AllCaseSelect;
