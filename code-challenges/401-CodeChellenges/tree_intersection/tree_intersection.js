"use strict";
let first = require("../binary-tree/tree");
let second = require("../binary-tree/tree");

function tree_intersection(first,second)
{
  let FinalResult = [];

  let finalLen;
   if(first.inOrder().length > second.inOrder().length)
   {
      finalLen = second.inOrder().length;
   }

   else
   {
      finalLen =  first.inOrder().length;
   }

   for (let i = 0; i < finalLen; i++) {
      for (let j = 0; j < finalLen; j++) {
          if(second.inOrder()[i] === first.inOrder()[j]) {
            FinalResult.push(second.inOrder()[i])  
          }   
      }
  }
   // const FinalResult = first.inOrder().filter((value) => second.inOrder().includes(value));

   return FinalResult;
}

module.exports = tree_intersection;