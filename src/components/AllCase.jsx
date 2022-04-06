import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCase } from "../store/covidAllCaseSlice";
import { FcPlus } from "react-icons/fc";

const AllCase = () => {
  const {
    total_recovered,
    new_recovered,
    total_death,
    new_death,
    total_case,
    new_case,
    update_date,
  } = useSelector((state) => state.allcase.dataObj);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCase());
  }, [dispatch]);

  return (
    <div className="bg-[#e5e5e5] font-[Kanit]">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <div className="text-center pt-8">
          <h1 className="text-[#03045e] font-bold text-5xl">
            รายงานสถานการณ์ Covid-19
          </h1>
          <p className="text-lg font-medium mt-4 ">
            อัพเดตข้อมูล ณ {update_date}
          </p>
        </div>
        <div className="flex flex-wrap justify-between ">
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              Confirmed Case
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {total_case || 0}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">Cases</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {new_case || 0}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              Recovered Case
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {total_recovered || 0}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">Cases</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {new_recovered || 0}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              Death Case
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {total_death || 0}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">Cases</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {new_death || 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCase;
