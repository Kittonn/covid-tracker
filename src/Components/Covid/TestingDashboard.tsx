import React from "react";
import { useSelector } from "react-redux";
import { selectTesting } from "../../Store/selector";

const TestingDashboard: React.FC = () => {
  const data = useSelector(selectTesting);

  const sum_14 = data.reduce((acc, curr) => {
    return acc + curr.tests;
  }, 0);

  const positive_14 = data.reduce((acc, curr) => {
    return acc + curr.positive;
  }, 0);

  const data_7 = data.slice(data.length - 7, data.length);

  const sum_7 = data_7.reduce((acc, curr) => {
    return acc + curr.tests;
  }, 0);

  const positive_7 = data_7.reduce((acc, curr) => {
    return acc + curr.positive;
  }, 0);

  return (
    <div className="w-[400px] font-[Kanit] whitespace-nowrap bg-[#e5e5e5] rounded-xl p-5 md:mr-6 mb-4 shadow-md">
      <h1 className="text-[#03045e] text-lg font-semibold ">
        ข้อมูลการตรวจหาเชื้อ Covid-19 ด้วยวิธี RT-PCR
      </h1>
      <hr className="border-white my-2" />
      <div className="leading-6">
        <h2>ข้อมูลการตรวจหาเชื้อในรอบ 14 วัน</h2>
        <p>
          จำนวนการตรวจเชื้อสะสม :{" "}
          <span className="text-[#0077b6]">
            <b>{sum_14.toLocaleString()}</b>
          </span>{" "}
          ราย
        </p>
        <p>
          จำนวนการพบเชื้อ (Positive) :{" "}
          <span className="text-[#9d0208]">
            <b>{positive_14.toLocaleString()}</b>
          </span>{" "}
          ราย
        </p>
        <p>
          อัตราการตรวจพบเชื้อ :{" "}
          <span className="text-[#ff7b00]">
            <b>{((positive_14 / sum_14) * 100).toFixed(2)}</b>
          </span>{" "}
          %
        </p>
      </div>
      <hr className="border-white my-2" />
      <div className="leading-6">
        <h2>ข้อมูลการตรวจหาเชื้อในรอบ 7 วัน</h2>
        <p>
          จำนวนการตรวจเชื้อสะสม :{" "}
          <span className="text-[#0077b6]">
            <b>{sum_7.toLocaleString()}</b>
          </span>{" "}
          ราย
        </p>
        <p>
          จำนวนการพบเชื้อ (Positive) :{" "}
          <span className="text-[#9d0208]">
            <b>{positive_7.toLocaleString()}</b>
          </span>{" "}
          ราย
        </p>
        <p>
          อัตราการตรวจพบเชื้อ :{" "}
          <span className="text-[#ff7b00]">
            <b>{((positive_7 / sum_7) * 100).toFixed(2)}</b>
          </span>{" "}
          %
        </p>
      </div>
    </div>
  );
};

export default TestingDashboard;
