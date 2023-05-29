export const getFormattedDate = (date) => {
  const aditionalZero = (value) => {
    return value < 10 ? "0" + value : value;
  };

  return `${aditionalZero(date.getDate())}/${aditionalZero(
    date.getUTCMonth()
  )}/${date.getFullYear()} ${aditionalZero(date.getHours())}:${aditionalZero(
    date.getMinutes()
  )}`;
};
