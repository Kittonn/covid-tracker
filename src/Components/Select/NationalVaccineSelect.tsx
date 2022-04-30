import React, { useState } from "react";
import { vaccinegraphtype } from "../../Data/vaccine_graph_type";
import Container from "../Container";
import NationalVaccineChart from "../Chart/NationalVaccineChart";
import NationaVaccineManufacturerChart from "../Chart/NationaVaccineManufacturerChart";
import { FcDocument } from "react-icons/fc";

const NationalVaccineSelect: React.FC = () => {
  const [selected, setSelected] = useState(vaccinegraphtype[0].value);
  return (
    <Container>
      <div className="py-8">
        <div className="flex font-[Kanit]">
          <FcDocument size={24} className="mr-1" />
          <label>เลือกข้อมูล : </label>
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
            <NationalVaccineChart />
          ) : (
            <NationaVaccineManufacturerChart />
          )}
        </div>
      </div>
    </Container>
  );
};

export default NationalVaccineSelect;
