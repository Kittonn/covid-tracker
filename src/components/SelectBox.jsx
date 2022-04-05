import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { alldayActions } from "../store/alldayCaseSlice";
import AllCaseChart from "./Chart/AllCaseChart";

const data = [
  { id: 1, name: "New Case", value: "new_case" },
  { id: 2, name: "New Death", value: "new_death" },
  { id: 3, name: "New Recovered", value: "new_recovered" },
];

const SelectBox = () => {
  const [selected, setSelected] = useState(data[0].value);

  return (
    <div>
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        {data.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
      <AllCaseChart />
    </div>
  );
};

export default SelectBox;
