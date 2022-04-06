import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import VaccineProvinceSelect from "../components/VaccineProvinceSelect";
import { getProvinceVaccine } from "../store/provinceVaccineSlice";

const Vaccine = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvinceVaccine());
  }, [dispatch]);
  return (
    <div>
      <VaccineProvinceSelect />
    </div>
  );
};

export default Vaccine;
