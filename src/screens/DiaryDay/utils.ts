const addLeadingZero = (number: string) => number.length < 2 ? '0' + number : number;

const formatDate = (date: Date) => {
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  let year = date.getFullYear();

  day = addLeadingZero(day);
  month = addLeadingZero(month);

  return `${year}-${month}-${day}T00:00:00`;
};

export { formatDate };
