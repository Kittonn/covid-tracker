import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const VaccineProvinceDoseChart = () => {
  const { province, total_1st_dose, total_2nd_dose, total_3rd_dose } =
    useSelector((state) => state.provincevaccinedose.dataList);

  const data = {
    labels: ["เข็มที 1", "เข็มที 2", "เข็มที 3", "ทัั้งหมด"],
    datasets: [
      {
        label: "ปริมาณ",
        data: [
          total_1st_dose,
          total_2nd_dose,
          total_3rd_dose,
          total_1st_dose + total_2nd_dose + total_3rd_dose,
        ],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
        ],
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
        text: ["กราฟแสดงจำนวนการฉีดวัคซีน", `จังหวัด${province} ในรอบ 14 วัน`],
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
        display: false,
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default VaccineProvinceDoseChart;
