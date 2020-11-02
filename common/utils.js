export function convertCToF(celsius) {
  return Math.floor((celsius * 9) / 5 + 32);
}

export function dayOfWeek(date) {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  if (!date) {
    return '';
  }

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = date.getDay();
  return daysOfWeek[day];
}
