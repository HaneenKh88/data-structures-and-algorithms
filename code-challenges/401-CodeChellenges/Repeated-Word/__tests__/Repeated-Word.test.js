'use strict';

const RepeatedWord = require('../Repeated-Word');

describe('Repeated Word Test', () => {
    it('Can successfully return duplicated words', () => {

   
    expect(RepeatedWord('Once upon a time, there was a brave princess who...')).toEqual('a');
       

    });

    it('Can successfully return duplicated words', () => {

   
        expect(RepeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...')).toEqual('it');
           
    
        });

    it('Can successfully return that there is no repeated from the statment', () => {

        expect(RepeatedWord('Once upon time, there was a brave princess who...')).toEqual('There is no duplicated words');
       

    });


});