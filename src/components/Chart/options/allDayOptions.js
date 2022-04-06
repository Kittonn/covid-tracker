export const options = {
  plugins: {
    title: {
      display: true,
      text: "กราฟแสดงจำนวนผู้ติดเชื้อใหม่ รายวัน",
      font: {
        size: 22,
        family: "Kanit",
      },
    },
    legend: {
      display: false,
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
