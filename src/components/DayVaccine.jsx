import React from "react";
import { FcPlus } from "react-icons/fc";
import { useSelector } from "react-redux";

const DayVaccine = () => {
  const { list } = useSelector((state) => state.dayvaccine);
  const newList = list.slice(list.length - 2, list.length);

  return (
    <div className="bg-[#e5e5e5] font-[Kanit]">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto py-8">
        <h1>รายงานข้อมูลการฉีดวัคซีน</h1>
        <div className="flex flex-wrap justify-between ">
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 1
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              0
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">0</div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 2
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              0
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">0</div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 3
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              0
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">0</div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              ทั้งหมด
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              0
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayVaccine;
