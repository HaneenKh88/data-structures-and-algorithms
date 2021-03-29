/* eslint-disable new-cap */
'use strict';

const ShiftArray = require('../array-shift');

describe('Testing For Code Chellenge 2', () => {
  it('Add new value in the middle of the array', () => {
    expect(ShiftArray([2,4,6,8],5)).toStrictEqual([2,4,5,6,8]);
    expect(ShiftArray([4,8,15,23,42],16)).toStrictEqual([4,8,15,16,23,42]);
  });
});
