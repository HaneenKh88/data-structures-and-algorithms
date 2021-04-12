
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class AnimalShelter {
    constructor() {
      this.node = null;
    }
    enqueue(value) {
      if (!this.node) {
        if (
          new Node(value).value.kined == 'cat' ||
          new Node(value).value.kined == 'dog'
        ) {
          return (this.node = new Node(value));
        } else {
          return 'sorry its not dog or cat';
        }
      }
      if (
        new Node(value).value.kined == 'cat' ||
        new Node(value).value.kined == 'dog'
      ) {
        let top = new Node(value);
        top.next = this.node;
        this.node = top;
  
        return this;
      } else {
        return 'sorry itsnot dog or cat';
      }
    }
    dequeue() {
      let previousVal;
      let currentvalue = this.node;
      while (currentvalue.next) {
        if (!currentvalue.next.next) {
            previousVal = currentvalue;
          currentvalue = currentvalue.next;
        } else {
          currentvalue = currentvalue.next;
        }
      }
      let temp = previousVal;
      temp.next = null;
  
      return currentvalue.value;
    }
  }
  
  module.exports=AnimalShelter;