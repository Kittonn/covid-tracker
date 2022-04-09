import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
const DayVaccineTypeChart = () => {
  const { list } = useSelector((state) => state.dayvaccinetype);

  const data = {
    labels: list.map((item) => item.date),
    datasets: [
      {
        label: "AstraZeneca",
        data: list.map((item) => item.AstraZeneca),

        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
      {
        label: "Johnson & Johnson",
        data: list.map((item) => item["Johnson & Johnson"]),
        backgroundColor: ["rgba(255, 205, 86, 0.2)"],
        borderColor: ["rgb(255, 205, 86)"],
        borderWidth: 1,
      },
      {
        label: "Sinopharm",
        data: list.map((item) => item.Sinopharm),

        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgb(75, 192, 192)"],
        borderWidth: 1,
      },
      {
        label: "Sinovac",
        data: list.map((item) => item.Sinovac),
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgb(54, 162, 235)"],
        borderWidth: 1,
      },
      {
        label: "Pfizer",
        data: list.map((item) => item.Pfizer),
        backgroundColor: ["rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgb(153, 102, 255)"],
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
        text: [
          "กราฟแสดงจำนวนการฉีดวัคซีนทั้งประเทศ",
          "แยกตามผู้ผลิต ในรอบ 14 วัน",
        ],
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
    <div className="font-[Poppins] h-[300px] md:h-[400px] lg:h-[480px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default DayVaccineTypeChart;
