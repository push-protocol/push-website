/* eslint-disable no-var */
export default function getDatesArray({
  start,
  end,
  interval,
}: {
  start: Date | string,
  end: Date | string,
  interval: number,
}) {
  for (var dateArray: Date[] = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + interval)) {
    dateArray.push(new Date(dt));
  }

  const date = dateArray[dateArray.length - 1];
  if (new Date(date).getDate() !== new Date(end).getDate()) {
    dateArray.push(new Date(end));
  }

  return dateArray;
}

