'use strict';

const InsertionSort = require('../InsertionSort');

describe('Insertion Sort testing', () => {
    it('Can successfully return the array from smallest to largest element', () => {

        expect(InsertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
       

    });

    it('Can successfully return the same result if the array contain one element', () => {

        expect(InsertionSort([8])).toEqual([8]);
       

    });

    it('Can successfully return an empty array if there is no any element in the array', () => {

        expect(InsertionSort([])).toEqual([]);

    });

});