import React, { useEffect } from "react";
import { getProvinceCase } from "../store/provinceCaseSlice";
import { useDispatch } from "react-redux";
import ProvinceSelect from "./ProvinceSelect";
import ProvinceCaseChart from "./Chart/ProvinceCaseChart";
const ProvinceCase = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvinceCase());
  }, [dispatch]);
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
      <ProvinceSelect />
      <ProvinceCaseChart />
    </div>
  );
};

export default ProvinceCase;
