import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VaccineProvinceChart = () => {
  const { dataProvince, update_date } = useSelector(
    (state) => state.provincevaccine
  );
  const {
    province,
    delivered_sinovac,
    delivered_astrazeneca,
    delivered_pfizer,
    delivered_total,
  } = dataProvince;
  const data = {
    labels: ["Sinovac", "Astrazeneca", "Pfizer", "Total"],
    datasets: [
      {
        label: `ปริมาณ`,
        data: [
          delivered_sinovac,
          delivered_astrazeneca,
          delivered_pfizer,
          delivered_total,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `การจัดส่งวัคซีนในจังหวัด${province}`,
        font: {
          size: 16,
          family: "Kanit",
        },
      },
      legend: {
        display: false,
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default VaccineProvinceChart;
