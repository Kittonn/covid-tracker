import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import VaccineProvinceSelect from "../components/VaccineProvinceSelect";
import { getProvinceVaccine } from "../store/provinceVaccineSlice";
import VaccineProvinceChart from "../components/Chart/VaccineProvinceChart";

const Vaccine = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvinceVaccine());
  }, [dispatch]);
  return (
    <div>
      <div className="bg-[#e5e5e5] font-[Kanit] py-8">
        <VaccineProvinceSelect />
        <VaccineProvinceChart />
      </div>
    </div>
  );
};

export default Vaccine;
