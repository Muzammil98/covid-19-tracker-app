export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (actualDate) => {
  let date, day, month, year;

  day = new Date(actualDate).getDate();
  month = new Date(actualDate).getMonth();
  month = MONTHS[month];
  year = new Date(actualDate).getFullYear();

  return (date = `${month} ${day}, ${year}`);
};
