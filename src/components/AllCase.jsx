import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCase } from "../store/covidAllCaseSlice";
const AllCase = () => {
  const {
    update_date,
    total_recovered,
    new_recovered,
    total_death,
    new_death,
    total_case,
    new_case,
  } = useSelector((state) => state.allcase.dataObj);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCase());
  }, [dispatch]);

  return (
    <div className="bg-[#e5e5e5] ">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <div>
          <p>Confirmed Case</p>
          <h1>{}</h1>
        </div>
      </div>
    </div>
  );
};

export default AllCase;
