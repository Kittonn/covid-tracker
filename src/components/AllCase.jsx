import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCase } from "../store/covidAllCaseSlice";
import { FcPlus } from "react-icons/fc";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

  const fatality_rate = (total_death / total_case) * 100;
  const recovery_rate = (total_recovered / total_case) * 100;

  return (
    <div className="bg-[#e5e5e5] font-[Poppins]">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <div className="flex flex-wrap justify-between ">
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              Confirmed Case
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {total_case.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">Cases</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {new_case.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              Recovered Case
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {total_recovered.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">Cases</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {new_recovered.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              Death Case
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {total_death.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">Cases</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {new_death.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Fatality Rate</p>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={`${fatality_rate}`}
                text={`${fatality_rate.toFixed(1)}%`}
              />
            </div>
          </div>
          <div>
            <p>Recovery Rate</p>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={`${recovery_rate}`}
                text={`${recovery_rate.toFixed(1)}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCase;
