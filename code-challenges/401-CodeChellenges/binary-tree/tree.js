'use strict';

const Node = require("./Node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const results = [];
    const _traverse = (node) => {

      results.push(node.value);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      results.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      results.push(node.value);
    };
    _traverse(this.root);
    return results;
  }

  add(value) {
    let NewNode = new Node();


    if (!this.root) {
      this.root = NewNode;
      return this;
    }

    const _traverse = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = NewNode;
        }
        _traverse(node.left);
      }

      else if (value > node.value) {
        if (!node.right) {
          node.right = NewNode;
        }
        _traverse(node.right);
      }
    };
    _traverse(this.root);
  }

  contains(value) {

    if (!this.root) {
      return 'The Tree is empty';
    }
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.left;

      }
      else if (value > current.value) {
        current = current.right;
      }
      else {
        return true;
      }
    }

    return false;

  }

  findMaximumValue()
  {
    if (!this.root) {
      return 'The Tree is empty';
    }
    let MaxArray = this.preOrder();
    let MaxValue = this.root.value;

    for (let i = 0; i < MaxArray.length; i++) {
      if(MaxArray[i] > MaxValue)
      MaxValue = MaxArray[i];
      
    }
    return MaxValue;
  }

  BreadthFirst()
  {
    let ResultArr = [];
    let NewArr = [];
    let current = this.root;

    if (!this.root) {
      return 'The Tree is empty';
    }

    else if(current)
    {
      NewArr.push(current);

      while(NewArr.length)
      {
        current = NewArr.shift(); 
        ResultArr.push(current.value);
        
        if(current.left)
        {
          NewArr.push(current.left);
        }
        if(current.right)
        {
          NewArr.push(current.right);
        }
      }
      return ResultArr;
    }
  }


  // FizzBuzzTree(tree)
  // {
    
  //   const _traverse = (node) => {
  //     let current = node.value;
  //   if(!this.root) {
  //     return 'The Tree is empty';
  //   }

  //     if(current % 3 === 0)
  //     {
  //       current = 'Fizz';
  //     }

  //     else if(current % 5 === 0)
  //     {
  //       current = 'Buzz';
  //     }

  //     else if(current % 3 === 0 && current % 5 === 0)
  //     {
  //       current = 'FizzBuzz';
  //     }
  //     else
  //     {
  //       current = `${current}`
  //     }
    
  //     if (node.left) _traverse(node.left);
  //     if (node.right) _traverse(node.right);
  
  //   _traverse(tree.root);
   
  //   };
  // }
}




module.exports = BinaryTree;