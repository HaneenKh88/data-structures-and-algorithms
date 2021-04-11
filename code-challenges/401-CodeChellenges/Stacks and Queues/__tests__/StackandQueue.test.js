/* eslint-disable new-cap */
'use strict';

const Stack = require('../Stack');
const Queues = require('../Queue');




describe('Stacks  Test', () => {
  it('Can successfully push onto a stack', () => {
    const ll1 = new Stack();
    ll1.push(1);
    expect(ll1.top.value).toEqual(1);
  });
  it('Can successfully push onto a stackCan successfully push multiple values onto a stack', () => {
    const ll1 = new Stack();
    ll1.push(1);
    ll1.push(2);

    expect(ll1.top.value).toEqual(2);
    expect(ll1.top.next.value).toEqual(1);
  });
  it('Can successfully pop off the stack', () => {
    const ll1 = new Stack();
    ll1.push(1);
    ll1.push(2);
    ll1.pop();

    expect(ll1.top.value).not.toEqual(2);
  });
  it('Can successfully empty a stack after multiple pops', () => {
    const ll1 = new Stack();
    ll1.push(1);
    ll1.push(2);
    ll1.pop();
    ll1.pop();

    expect(ll1.isEmpty()).toBeTruthy();
  });
  it('Can successfully peek the next item on the stack', () => {
    const ll1 = new Stack();
    ll1.push(1);
    ll1.push(2);
    expect(ll1.peek()).toEqual(2);
  });
  it('Can successfully instantiate an empty stack', () => {
    const ll1 = new Stack();

    expect(ll1.top).toBeNull();
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    const ll1 = new Stack();

    expect(ll1.pop()).toEqual('Stack is Empty');
    expect(ll1.peek()).toEqual('Stack is Empty');
  });
});

describe('Queues tests', () => {
  it('Can successfully enqueue into a queue', () => {
    const ll1 = new Queues();
    ll1.enqueue(1);
    expect(ll1.front.value).toEqual(1);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    const ll2 = new Queues();
    ll2.enqueue(1);
    ll2.enqueue(2);

    expect(ll2.front.value).toEqual(1);
    expect(ll2.front.next.value).toEqual(2);
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    const ll2 = new Queues();
    ll2.enqueue(1);
    ll2.enqueue(2);
    ll2.dequeue();
    expect(ll2.front.value).toEqual(2);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    const ll2 = new Queues();
    ll2.enqueue(1);
    ll2.enqueue(2);
    expect(ll2.peek()).toEqual(1);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    const ll = new Queues();
    ll.enqueue(1);
    ll.enqueue(2);
    ll.dequeue();
    ll.dequeue();

    expect(ll.isEmpty()).toBeTruthy();
  });
  it('Can successfully instantiate an empty queue', () => {
    const ll = new Queues();

    expect(ll.front).toBeNull();
  });
  it('Calling pop or peek on empty Queues raises exception', () => {
    const ll = new Queues();

    expect(ll.dequeue()).toEqual('Queue is Empty');
    expect(ll.peek()).toEqual('Queue is Empty');
  });
});