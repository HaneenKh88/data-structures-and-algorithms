/* eslint-disable eol-last */
module.exports = function insertShiftArray(array, value) {
  let middlenum = array.length / 2;
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    middlenum = Math.ceil(middlenum);
    if (i === middlenum) {
      newArr.push(value);
      newArr.push(array[i]);
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
