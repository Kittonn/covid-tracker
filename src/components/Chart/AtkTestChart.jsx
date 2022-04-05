import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
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
import { useDispatch, useSelector } from "react-redux";
import { options } from "./options/atkTestOption";
import { getTest } from "../../store/atkTestSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AtkTestChart = () => {
  const dispatch = useDispatch();
  const gettest = useSelector((state) => state.atktest.list);

  useEffect(() => {
    dispatch(getTest());
  }, [dispatch]);
  const data = {
    labels: gettest.map((item) => item.date),
    datasets: [
      {
        label: "จำนวนการตรวจเชื้อ",
        data: gettest.map((item) => item.tests),
        backgroundColor: ["rgba(255,99,132,0.6)"],
        borderWidth: 1,
      },
      {
        label: "Positive",
        data: gettest.map((item) => item.positive),
        backgroundColor: ["rgba(72, 202, 228, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Line data={data} height={150} options={options} />
    </div>
  );
};

export default AtkTestChart;
