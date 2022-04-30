import React from "react";
import ChartLayout from "./ChartLayout";
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
  BarElement,
} from "chart.js";
import { useSelector } from "react-redux";
import { selectProvinceVaccine } from "../../Store/selector";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const ProvinceVaccineChart: React.FC = () => {
  const datas = useSelector(selectProvinceVaccine);

  const data = {
    labels: ["เข็มที 1", "เข็มที 2", "เข็มที 3", "ทั้งหมด"],
    datasets: [
      {
        label: "ปริมาณ",
        data: [
          datas[0]?.total_1st_dose,
          datas[0]?.total_2nd_dose,
          datas[0]?.total_3rd_dose,
          datas[0]?.total_1st_dose +
            datas[0]?.total_2nd_dose +
            datas[0]?.total_3rd_dose,
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
        text: [
          `กราฟแสดงจำนวนการฉีดวัคซีน จังหวัด${datas[0]?.province} `,
          `แยกตามเข็มที่ฉีด ในรอบ 14 วัน`,
        ],
        font: {
          size: 16,
          family: "Kanit",
        },
      },
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 7,
        },
      },
      y: {
        ticks: {
          callback: (value: any) => {
            return value === 0
              ? 0
              : value < 1000000 && value >= 1000
              ? value / 1000 + "K"
              : value >= 1000000
              ? value / 1000000 + "M"
              : value;
          },
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <ChartLayout>
      <Bar data={data} options={options} />
    </ChartLayout>
  );
};

export default ProvinceVaccineChart;
