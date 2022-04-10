import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import VaccineProvinceSelect from "../components/VaccineProvinceSelect";
import { getProvinceVaccine } from "../store/provinceVaccineSlice";
import VaccineProvinceChart from "../components/Chart/VaccineProvinceChart";
import DayVaccine from "../components/DayVaccine";
import { getDayVaccine } from "../store/dayVaccine";
import VaccineSelect from "../components/VaccineSelect";
import { getDayVaccineType } from "../store/dayVaccineType";
import { getProvinceVaccineDose } from "../store/provinceVaccineDoseSlice";
import ProvinceVaccineTypeSelect from "../components/ProvinceVaccineTypeSelect";
import { getProvinceVaccineType } from "../store/ProvinceVaccineTypeSlice";

const Vaccine = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvinceVaccine());
    dispatch(getDayVaccine());
    dispatch(getDayVaccineType());
    dispatch(getProvinceVaccineDose());
    dispatch(getProvinceVaccineType());
  }, [dispatch]);

  return (
    <div>
      <DayVaccine />
      <VaccineSelect />
      <ProvinceVaccineTypeSelect />
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto font-[Kanit] py-8">
        <VaccineProvinceSelect />
        <VaccineProvinceChart />
      </div>
    </div>
  );
};

export default Vaccine;
