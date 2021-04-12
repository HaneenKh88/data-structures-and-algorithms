/* eslint-disable new-cap */
'use strict';

const PseudoQueue = require('../StackWithQueue');
// const Stack = require('../../Stacks and Queues/Stack');

describe('Stack With Queue test', () => {
  it('test for empty  Queue', () => {

    const Queue = new PseudoQueue();
    expect(Queue.pushStack.top).toBeNull();
    expect(Queue.popStack.top).toBeNull();

  });

  it('test for add a value to the Queue', () => {

    const Queue = new PseudoQueue();
    Queue.enqueue(5);
    
    expect(Queue.pushStack.top.value).toBe(5);
    // expect(Queue.popStack.top).toBeNull();

  });
  
  // it('should extracts a value from the PseudoQueue', () => {
  //   let newQueue = new PseudoQueue();
  //   newQueue.enqueue(7);
  //   newQueue.enqueue(3);
  //   newQueue.enqueue(10);
   
  //   expect(newQueue.dequeue()).toEqual(7);  // if dequeue
  // });



  it('test for give an exception if we want dequeue from the Empty queue', () => {

    const Queue = new PseudoQueue();
    Queue.dequeue();
    expect(Queue.dequeue()).toBe('the Queue is Empty');
    
  });


});