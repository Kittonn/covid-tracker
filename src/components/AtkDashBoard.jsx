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
    <div className="font-[Kanit]">
      <h1>ข้อมูลการตรวจหาเชื้อ Covid-19 ด้วยวิธี RT-PCR</h1>
      <div>
        <h2>ข้อมูลการตรวจหาเชื้อในรอบ 14 วัน</h2>
        <p>จำนวนการตรวจเชื้อสะสม : {sum_14}</p>
        <p>จำนวนการพบเชื้อ (Positive) : {positive_14}</p>
        <p>
          อัตราการตรวจพบเชื้อ : {((positive_14 / sum_14) * 100).toFixed(2)} %
        </p>
      </div>
      <div>
        <h2>ข้อมูลการตรวจหาเชื้อในรอบ 7 วัน</h2>
        <p>จำนวนการตรวจเชื้อสะสม : {sum_7}</p>
        <p>จำนวนการพบเชื้อ (Positive) : {positive_7}</p>
        <p>อัตราการตรวจพบเชื้อ : {((positive_7 / sum_7) * 100).toFixed(2)} %</p>
      </div>
    </div>
  );
};

export default AtkDashBoard;
