import React, { useState } from "react";
import Container from "../Container";
import { type } from "../../Data/case_type";
import { change_data } from "../../Store/timelineCaseSlice";
import { useDispatch } from "react-redux";
import TimelineCaseChart from "../Chart/TimelineCaseChart";
import { FcDocument } from "react-icons/fc";

const TimelineCaseSelect: React.FC = () => {
  const [selected, setSelected] = useState<string>(type[0].value);
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="py-8 font-[Kanit]">
        <div className="flex">
          <FcDocument size={24} className="mr-1" />
          <label>เลือกข้อมูล : </label>
          <select
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              dispatch(change_data(e.target.value));
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
        <TimelineCaseChart selected={selected} />
      </div>
    </Container>
  );
};

export default TimelineCaseSelect;
