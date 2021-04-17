'use strict';


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }


}

class Stack {
    constructor() {
      this.top = null;
    }

    peek() {
      if(this.isEmpty())
      {
        return 'Stack is Empty'
      }
     return this.top.value;
  }

  push(value) {
      let NewNode = new Node(value);
      if(this.isEmpty())
      {
        this.top = NewNode;
      }

      else
      {
        NewNode.next = this.top;
        this.top = NewNode;
      }
  }
  
  pop() {
      
      if(this.isEmpty())
      {
        return 'Stack is Empty'
      }

        let temp = this.top;
        this.top = temp.next;
        temp.next = null;

        return this;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
  
  
}





module.exports = Stack;