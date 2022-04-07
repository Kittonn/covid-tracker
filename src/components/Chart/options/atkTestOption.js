export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "กราฟแสดงจำนวนการตรวจหาเชื้อ Covid-19",
      font: {
        size: 22,
        family: "Kanit",
      },
    },
    legend: {
      labels: {
        font: {
          size: 16,
          family: "Kanit",
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 12,
      },
    },
  },
};
