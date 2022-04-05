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
import { getAllDay } from "../../store/alldayCaseSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AllCaseChart = () => {
  const allDay = useSelector((state) => state.allday.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDay());
  }, [dispatch]);

  var data = {
    labels: allDay.map((item) => new Date(item.txn_date).getFullYear()),
    datasets: [
      {
        label: "Covid",
        data: allDay.map((item) => item.new_case),
        backgroundColor: ["rgba(255,99,132,0.6)"],
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default AllCaseChart;
