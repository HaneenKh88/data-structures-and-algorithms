'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }


}


class Queue {
    constructor() {
      this.front = null;
    }
  
    peek() {
      if(this.isEmpty())
      {
        return 'Queue is Empty'
      }
     return this.front.value;
  }
  
    enqueue(value) {
      let NewNode = new Node(value);
      if(this.isEmpty())
      {
        return this.front = NewNode;
      }
      let current = this.front;
  
      while(current.next)
      {
        current = current.next;
      }
  
      current.next = NewNode;
      
      return this;

      
  }
  
  dequeue() {
      
      if(this.isEmpty())
      {
        return 'Queue is Empty'
      }
  
        let temp = this.front;
        this.front = temp.next;
        temp.next = null;
  
        return this;
  }
  
  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
  
  }
  
module.exports = Queue;

  