/* eslint-disable new-cap */
'use strict';

const binarySearch = require('../binarySearch');

describe('Testing For Code Chellenge 3', () => {
  it('Binary Search', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1);

  });
});
