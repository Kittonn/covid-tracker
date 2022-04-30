import React from "react";
import Container from "../Container";
import { FcCalendar, FcPlus } from "react-icons/fc";
import { useSelector } from "react-redux";
import { selectNationalVaccine } from "../../Store/selector";

const NationalVaccineDashboard: React.FC = () => {
  const list = useSelector(selectNationalVaccine);
  const data = list[list.length - 1];
  const last_data = list[list.length - 2];

  return (
    <div className="bg-[#e5e5e5] font-[Kanit] pt-8 pb-4">
      <Container>
        <h1 className="text-[#03045e] font-bold text-2xl md:text-3xl text-center lg:text-5xl">
          รายงานข้อมูลการฉีดวัคซีน
        </h1>
        <p className="flex items-center justify-center text-lg  font-medium mt-2 lg:mt-4">
          <span>
            <FcCalendar className="text-2xl mr-1" />
          </span>
          อัพเดตข้อมูล ณ {data?.date}
        </p>
        <div className="flex flex-wrap justify-between ">
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 1
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {data?.first_dose.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {(data?.first_dose - last_data?.first_dose).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 2
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {data?.second_dose.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {(data?.second_dose - last_data?.second_dose).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              เข็มที่ 3
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {data?.third_dose.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {(data?.third_dose - last_data?.third_dose).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="bg-white flex-1 mx-3 my-3 md:my-5 lg:my-6 p-5 rounded-xl shadow-md">
            <p className="text-base whitespace-nowrap font-bold mb-2">
              ทั้งหมด
            </p>
            <h1 className="text-3xl font-bold text-[#03045e] tracking-wider mb-2">
              {data?.total_doses.toLocaleString()}
            </h1>
            <hr />
            <p className="text-base text-[#adb5bd] mt-1">เพิ่ม</p>
            <div className="flex items-center">
              <FcPlus className="text-2xl mr-2" />
              <div className="tracking-wider font-bold text-lg">
                {(data?.total_doses - last_data?.total_doses).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NationalVaccineDashboard;
