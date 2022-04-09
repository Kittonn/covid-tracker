import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import VaccineProvinceSelect from "../components/VaccineProvinceSelect";
import { getProvinceVaccine } from "../store/provinceVaccineSlice";
import VaccineProvinceChart from "../components/Chart/VaccineProvinceChart";
import DayVaccine from "../components/DayVaccine";
import { getDayVaccine } from "../store/dayVaccine";
import DayVaccineChart from "../components/Chart/DayVaccineChart";
import { getDayVaccineType } from "../store/dayVaccineType";

const Vaccine = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvinceVaccine());
    dispatch(getDayVaccine());
    dispatch(getDayVaccineType());
  }, [dispatch]);
  return (
    <div>
      <DayVaccine />
      <DayVaccineChart />

      <div className="bg-[#e5e5e5] font-[Kanit] py-8">
        <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
          <VaccineProvinceSelect />
          <VaccineProvinceChart />
        </div>
      </div>
    </div>
  );
};

export default Vaccine;
