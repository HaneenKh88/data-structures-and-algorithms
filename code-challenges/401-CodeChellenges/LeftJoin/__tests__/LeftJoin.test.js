'use strict';

const LeftJoin = require('../LeftJoin.js');
const hashTable = require('../../HashTable/HashTable');


describe('Testing For Code Chellenge 1', () => {
  it('Happy Case', () => {
    let left = new hashTable(10);
    let right = new hashTable(10);
    
    left.add('fond', 'enamored');
    right.add('fond', 'averse');
    left.add('wrath', 'anger');
    right.add('wrath', 'delight');
    left.add('diligent', 'employed');
    right.add('diligent', 'idle');
    left.add('outfit', 'garb');
    right.add('guide', 'follow');
    left.add('guide', 'usher');
    right.add('flow', 'jam');

   

    expect(LeftJoin(left, right)).toStrictEqual([["wrath", "anger", "delight"], ["diligent", "employed", "idle"], ["outfit", "garb", "not found"], ["guide", "usher", "follow"], ["fond", "enamored", "averse"]]);

  });

  it("Error Case", () => {
    let left = new hashTable(10);
    let right = new hashTable(10);
    right.add('fond', 'averse');
    left.add('fond', 'anger');
    left.add('flow', 'usher');
    right.add('flow', 'jam');
    expect(LeftJoin(left)).toEqual("error");
  });

  test("Edge Case", () => {
    
    let right = new hashTable(10);
    let left = new hashTable(10);

    right.add('fond', 'averse');
    right.add('flow', 'anger');
  
    expect(LeftJoin(left, right)).toEqual(
      "There is no hash in the left table")
  });
});
