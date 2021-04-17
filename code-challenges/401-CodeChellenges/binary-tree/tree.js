'use strict';

const Node = require("./Node");

class BinaryTree
{
    constructor(root = null) {
        this.root = root;
      }
   
      preOrder()
      {
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

      add(value)
      {
          let NewNode = new Node();
          
    
            if (!this.root) {
                this.root = NewNode;
                return this;
            }
            
            const _traverse = (node) => {
               if(value < node.value)
               {
                   if(!node.left)
                   {
                       node.left = NewNode;
                   }
                   _traverse(node.left);
               }

               else  if(value > node.value)
               {
                   if(!node.right)
                   {
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
                else
                {
                return true;
                }
            }
    
            return false;
    
        }

     
}

module.exports = BinaryTree;