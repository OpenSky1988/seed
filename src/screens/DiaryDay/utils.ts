const addLeadingZero = (number: string) => number.length < 2 ? '0' + number : number;

const formatDate = (date: Date) => {
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  const year = date.getFullYear();

  day = addLeadingZero(day);
  month = addLeadingZero(month);

  return `${year}-${month}-${day}`;
};

const formatTime = (date: Date) => {
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let seconds = date.getSeconds().toString();
  
  hours = addLeadingZero(hours);
  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);
  
  return `${hours}:${minutes}:${seconds}`;
};

export { formatDate, formatTime };
