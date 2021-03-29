/* eslint-disable no-unused-vars */
'use strict';


module.exports = function ShiftArray(Array,Value) {
  let MiddleArr = Array.length/2;
  let NewArr = [];

  for (let i = 0; i <= Array.length; i++) {
    if(i === MiddleArr)
    {
      NewArr.push(Value);
      NewArr.push(Array[i]);
    }

    else
    {
      NewArr.push(Array[i]);
    }
  }
  return NewArr;
};
