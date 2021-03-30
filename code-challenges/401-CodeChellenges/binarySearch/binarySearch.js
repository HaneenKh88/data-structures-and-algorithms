/* eslint-disable eol-last */
module.exports = function binarySearch (array, value) {
  let lowNum = 0;
  let highNum = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let mid = Math.floor((highNum - lowNum) / 2);
    mid = mid + lowNum;

    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      lowNum = mid + 1;
    } else if (array[mid] > value) {
      highNum = mid - 1;
    }
  }
  return -1;
};
