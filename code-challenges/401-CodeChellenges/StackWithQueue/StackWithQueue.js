const Stack = require('../Stacks and Queues/Stack');


  class PseudoQueue{
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
      
    }

    enqueue(value) {
        
      this.pushStack.push(value);
    }
    
    dequeue() {
        if(this.pushStack.isEmpty() && this.pushStack.isEmpty())
        {
            return 'the Queue is Empty'
        }
     else if(this.popStack.isEmpty())
     {
       while(!this.pushStack.isEmpty())
       {
         this.popStack.push(this.pushStack.pop());
       }
     }
     
     return this.popStack.pop();
    }
  
  }

  module.exports= PseudoQueue;