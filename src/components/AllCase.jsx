import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCase } from "../store/covidAllCaseSlice";
import { FcPlus } from "react-icons/fc";

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
    <div className="bg-[#e5e5e5] font-[Poppins]">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <div className="flex flex-wrap justify-between ">
          <div className="bg-white flex-1 m-3 p-5 rounded-xl shadow-md">
            <p className="text-lg whitespace-nowrap">Confirmed Case</p>
            <h1 className="text-2xl font-bold text-[#03045e] tracking-widest">
              {total_case}
            </h1>
            <hr />
            <div className="flex items-center">
              <FcPlus />
              <div>{new_case}</div>
            </div>
          </div>
          <div className="bg-white flex-1 m-3 p-5 rounded-xl shadow-md">
            <p className="text-lg whitespace-nowrap">Recovered Case</p>
            <h1 className="text-2xl font-bold text-[#03045e] tracking-widest">
              {total_recovered}
            </h1>
            <hr />
            <div className="flex items-center">
              <FcPlus />
              <div>{new_recovered}</div>
            </div>
          </div>
          <div className="bg-white flex-1 m-3 p-5 rounded-xl shadow-md">
            <p className="text-lg whitespace-nowrap">Death Case</p>
            <h1 className="text-2xl font-bold text-[#03045e] tracking-widest">
              {total_death}
            </h1>
            <hr />
            <div className="flex items-center">
              <FcPlus />
              <div>{new_death}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCase;
