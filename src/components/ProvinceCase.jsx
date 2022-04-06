import React, { useEffect } from "react";
import { getProvinceCase } from "../store/provinceCaseSlice";
import { useDispatch } from "react-redux";
import ProvinceSelect from "./ProvinceSelect";

const ProvinceCase = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProvinceCase());
  }, [dispatch]);
  return (
    <div>
      <ProvinceSelect />
    </div>
  );
};

export default ProvinceCase;
