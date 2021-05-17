"use strict";
let first = require("../binary-tree/tree");
let second = require("../binary-tree/tree");

function tree_intersection(first,second)
{

   const FinalResult = first.inOrder().filter((value) => second.inOrder().includes(value));

   return FinalResult;
}

module.exports = tree_intersection;