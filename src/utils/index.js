import { default as ConvetNumber } from "comma-number";
export { default as Constants } from "./Constants";
export const commaNumber = (value, fixed = 2) =>
  ConvetNumber(value.toFixed(fixed));
export const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};
