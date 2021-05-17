"use strict";

const Node = require('../../binary-tree/Node');
const  BinaryTree  = require('../../binary-tree/tree');
const treeIntersection = require("../tree_intersection");

describe('Binary Tree', () => {
    let tree1, tree2;
    beforeAll(() => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      const four = new Node(4);
      const five = new Node(5);
      const six = new Node(6);
      const seven = new Node(7);
      const eight = new Node(8);
      one.left = two;
      one.right = three;
      two.left = four;
      two.right = five;
      five.left = eight;
      three.left = six;
      three.right = seven;
      tree1 = new BinaryTree(one);
    });

    beforeAll(() => {
        const one1 = new Node(11);
        const two2 = new Node(2);
        const three3 = new Node(33);
        const four4 = new Node(4);
        const five5 = new Node(55);
        const six6 = new Node(66);
        const seven7 = new Node(7);
        const eight8 = new Node(88);
        one1.left = two2;
        one1.right = three3;
        two2.left = four4;
        two2.right = five5;
        five5.left = eight8;
        three3.left = six6;
        three3.right = seven7;
        tree2 = new BinaryTree(one1);
      });

      it('Can successfully return the duplicated vlaue from both trees', () => {
        expect(treeIntersection(tree1, tree2)).toEqual([4,2,7]);
      });


});