'use strict';

const QuickSort = require('../QuickSort');

describe('Insertion Sort testing', () => {
    it('Can successfully return the array from smallest to largest element', () => {

    let arr = [8, 4, 23, 42, 16, 15];
    let expected = [4, 8, 15, 16, 23, 42];
    QuickSort(arr, 0, arr.length - 1);
    expect(arr).toEqual(expected);
       

    });

    it('Can successfully return the same result if the array contain one element', () => {

        let arr = [8];
       let expected = [8];
       QuickSort(arr, 0, arr.length - 1);
       expect(arr).toEqual(expected);
      

    });

    it('Can successfully return an empty array if there is no any element in the array', () => {

        let arr = [];
        let expected = [];
        QuickSort(arr, 0, arr.length - 1);
        expect(arr).toEqual(expected);
        
    });

});