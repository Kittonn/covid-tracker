const padTo2Digit = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (date: any) => {
  return [
    date.getFullYear(),
    padTo2Digit(date.getMonth() + 1),
    padTo2Digit(date.getDate()),
  ].join("-");
};
