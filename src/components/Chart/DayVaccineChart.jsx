import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

const DayVaccineChart = () => {
  const list = useSelector((state) => state.dayvaccine.list);

  const data = {
    labels: list.map((item) => item.date),
    datasets: [
      {
        label: "เข็มที่ 1",
        data: list.map((item) => item.first_dose),
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgb(75, 192, 192)"],
        borderWidth: 1,
      },
      {
        label: "เข็มที่ 2",
        data: list.map((item) => item.second_dose),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: "เข็มที่ 3",
        data: list.map((item) => item.third_dose),
        backgroundColor: ["rgba(255, 205, 86, 0.2)"],
        borderColor: ["rgb(255, 205, 86)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "กราฟแสดงจำนวนการฉีดวัคซีนทั้งประเทศ ในรอบ 14 วัน",
        font: {
          size: 16,
          family: "Kanit",
        },
      },
      legend: {
        labels: {
          font: {
            size: 14,
            family: "Kanit",
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 7,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto py-8">
      <div className="font-[Poppins] h-[300px] md:h-[400px] lg:h-[480px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DayVaccineChart;
