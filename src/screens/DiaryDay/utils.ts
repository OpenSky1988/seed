import type { IDiaryEntry } from './types';

const sortByTime = (a: IDiaryEntry, b: IDiaryEntry) => {
  const timeA = a.time;
  const timeB = b.time;

  const [hourA, minuteA] = timeA.split(':').map(Number);
  const [hourB, minuteB] = timeB.split(':').map(Number);

  if (hourA === hourB) {
    return minuteA - minuteB;
  }

  return hourA - hourB;
};

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

export { sortByTime, formatDate, formatTime };
