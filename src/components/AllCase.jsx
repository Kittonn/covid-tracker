import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCase } from "../store/covidAllCaseSlice";
const AllCase = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCase());
  }, [dispatch]);
  return <div>AllCase</div>;
};

export default AllCase;
