'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.result = [];
    }
}

class KArrayTree {
    constructor(root = null) {
      this.root = root;
    }

  
 
}


function fizzBuzzTree(tree) {
  
    let NewArray = [];
    if(!tree.root) {
        return 'The Tree is empty';
      }
    const _traverse = (node) => {
          
        
            if(node.value % 3 === 0 && node.value % 5 === 0)
            {
                node.value = 'FizzBuzz';
            }

           else if(node.value % 3 === 0)
            {
                node.value = 'Fizz';
            }
      
            else if(node.value % 5 === 0)
            {
                node.value = 'Buzz';
            }
    
            else
            {
                node.value = `${node.value}`
            }
         
              for (let i = 0; i < node.result.length; i++) {
                
                  NewArray.unshift(node.result[i]);
          }
          if(NewArray.length)
          {
          _traverse(NewArray.pop())
          }
        }

        _traverse(tree.root);
        return tree;
}


module.exports = {Node , KArrayTree, fizzBuzzTree};