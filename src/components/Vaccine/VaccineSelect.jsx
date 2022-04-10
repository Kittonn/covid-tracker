import React, { useState } from "react";
import { vaccinegraphtype } from "../../data/vaccinegraphtype";
import DayVaccineChart from "../Chart/DayVaccineChart";
import DayVaccineTypeChart from "../Chart/DayVaccineTypeChart";
import { FcDocument } from "react-icons/fc";

const VaccineSelect = () => {
  const [selected, setSelected] = useState("dose_type");
  return (
    <div className="font-[Kanit]">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto py-8">
        <div className="flex">
          <FcDocument size={24} />
          <label className="ml-1">เลือกข้อมูล : </label>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {vaccinegraphtype.map((item) => {
              return (
                <option key={item.id} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          {selected === "dose_type" ? (
            <DayVaccineChart />
          ) : (
            <DayVaccineTypeChart />
          )}
        </div>
      </div>
    </div>
  );
};

export default VaccineSelect;
