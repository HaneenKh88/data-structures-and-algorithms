'use strict';

// Require the linked list implementation



/*
  Accept a linked list
  Reveres it
  Return it
*/
module.exports = function reverse(list) {

  let NewArr = [];

  for (let i = list.length -1; i >= 0; i--) {
    
    NewArr.push(list[i]);
  }
  return NewArr;

}
