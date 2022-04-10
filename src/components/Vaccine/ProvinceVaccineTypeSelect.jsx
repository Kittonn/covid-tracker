import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { province } from "../../data/province";
import { vaccinegraphtype } from "../../data/vaccinegraphtype";
import { provinceVaccineDoseActions } from "../../store/provinceVaccineDoseSlice";
import { provinceVaccineTypeActions } from "../../store/ProvinceVaccineTypeSlice";
import VaccineProvinceDoseChart from "../Chart/VaccineProvinceDoseChart";
import VaccineProvinceTypeChart from "../Chart/VaccineProvinceTypeChart";

const ProvinceVaccineTypeSelect = () => {
  const [selected, setSelected] = useState(province[0].PROVINCE_NAME);
  const [typed, setTyped] = useState(vaccinegraphtype[0].value);
  const dispatch = useDispatch();
  return (
    <div className="bg-[#e5e5e5] font-[Kanit] py-8">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            dispatch(
              provinceVaccineDoseActions.change_province(e.target.value)
            );
            dispatch(
              provinceVaccineTypeActions.change_province(e.target.value)
            );
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
        <select value={typed} onChange={(e) => setTyped(e.target.value)}>
          {vaccinegraphtype.map((item) => {
            return (
              <option key={item.id} value={item.value}>
                {item.text}
              </option>
            );
          })}
        </select>
        <div>
          {typed === "dose_type" ? (
            <VaccineProvinceDoseChart />
          ) : (
            <VaccineProvinceTypeChart />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProvinceVaccineTypeSelect;
