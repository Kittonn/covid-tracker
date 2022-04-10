import React from "react";
import { useSelector } from "react-redux";

const AtkDashBoard = () => {
  const { list } = useSelector((state) => state.atktest);

  const sum_14 = list.reduce((acc, curr) => {
    return acc + curr.tests;
  }, 0);
  const positive_14 = list.reduce((acc, curr) => {
    return acc + curr.positive;
  }, 0);

  const arr_7 = list.slice(list.length - 7, list.length);
  const sum_7 = arr_7.reduce((acc, curr) => {
    return acc + curr.tests;
  }, 0);
  const positive_7 = arr_7.reduce((acc, curr) => {
    return acc + curr.positive;
  }, 0);

  return (
    <div className="font-[Kanit] whitespace-nowrap bg-[#e5e5e5] rounded-xl p-5 md:mr-6 mb-4">
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

export default AtkDashBoard;
