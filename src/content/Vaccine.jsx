import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import VaccineProvinceSelect from "../components/VaccineProvinceSelect";
import { getProvinceVaccine } from "../store/provinceVaccineSlice";
import VaccineProvinceChart from "../components/Chart/VaccineProvinceChart";
import DayVaccine from "../components/DayVaccine";
import { getDayVaccine } from "../store/dayVaccine";
import DayVaccineChart from "../components/Chart/DayVaccineChart";

const Vaccine = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvinceVaccine());
    dispatch(getDayVaccine());
  }, [dispatch]);
  return (
    <div>
      <DayVaccine />
      <DayVaccineChart />
      {/* <div className="bg-[#e5e5e5] font-[Kanit] py-8">
        <VaccineProvinceSelect />
        <VaccineProvinceChart />
      </div> */}
    </div>
  );
};

export default Vaccine;
