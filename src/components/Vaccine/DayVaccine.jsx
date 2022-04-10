import React from "react";
import { FcPlus } from "react-icons/fc";
import { useSelector } from "react-redux";
import { FcCalendar } from "react-icons/fc";

const DayVaccine = () => {
  const { update_date, listObj, minusData } = useSelector(
    (state) => state.dayvaccine
  );

  return (
    <div className="bg-[#e5e5e5] font-[Kanit]">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto py-8">
        <h1 className="text-[#03045e] font-bold text-2xl md:text-3xl text-center lg:text-5xl">
          รายงานข้อมูลการฉีดวัคซีน
        </h1>
        <p className="flex items-center justify-center text-lg  font-medium mt-2 lg:mt-4">
          <span>
            <FcCalendar className="text-2xl mr-1" />
          </span>
          อัพเดตข้อมูล ณ {update_date}
        </p>
        <div className="flex flex-wrap justify-between ">
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 1
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {listObj.first_dose.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {minusData[0].toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 2
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {listObj.second_dose.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {minusData[1].toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 3
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {listObj.third_dose.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {minusData[2].toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              ทั้งหมด
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {listObj.total_doses.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {minusData[3].toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayVaccine;
