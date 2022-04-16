import React, { useState } from "react";
import Container from "../Container";
import { FcHome, FcDocument } from "react-icons/fc";
import { province } from "../../Data/province";
import { vaccinegraphtype } from "../../Data/vaccine_graph_type";
import ProvinceVaccineChart from "../Chart/ProvinceVaccineChart";
import ProvinceVaccineManufacturerChart from "../Chart/ProvinceVaccineManufacturerChart";
import { change_province } from "../../Store/provinceVaccine";
import { change_province_manu } from "../../Store/provinceVaccineManufacturer";
import { useDispatch } from "react-redux";

const ProvinceVaccineSelect: React.FC = () => {
  const [selected, setSelected] = useState<string>(province[0].PROVINCE_NAME);
  const [type, setType] = useState<string>(vaccinegraphtype[0].value);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#e5e5e5] py-8 font-[Kanit]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mr-2 flex mb-2 ">
            <FcHome size={24} className="mr-1" />
            <label>เลือกจังหวัด : </label>
            <select
              value={selected}
              onChange={(e) => {
                setSelected(e.target.value);
                dispatch(change_province(e.target.value));
                dispatch(change_province_manu(e.target.value));
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
              }}
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
        </div>

        <div>
          {type === "dose_type" ? (
            <ProvinceVaccineChart />
          ) : (
            <ProvinceVaccineManufacturerChart />
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProvinceVaccineSelect;
