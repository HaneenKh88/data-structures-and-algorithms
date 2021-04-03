/* eslint-disable new-cap */
'use strict';

const LinkedList = require('../linked-list');

describe('Testing For Code Chellenge 4 Linked List', () => {
  it('instantiate an empty linked list', () => {
    const linkedlist = new LinkedList();
    expect(linkedlist.head).toBeNull();

  });

  it('insert into the linked list', () => {
    const linkedlist = new LinkedList();
    const NewVal = 'haneen';
    linkedlist.insert(NewVal);
    expect(linkedlist.head.value).toStrictEqual(NewVal);
    expect(linkedlist.head.next).toBeNull();
    
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const linkedlist = new LinkedList();
    const Val1 = 'haneen';
    linkedlist.insert(Val1);
    expect(linkedlist.head.value).toStrictEqual(Val1);

    const Val2 = 'khasawneh';
    linkedlist.insert(Val2);
    expect(linkedlist.head.next.value).toStrictEqual(Val2);
    expect(linkedlist.head.next.next).toBeNull();
    
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const linkedlist = new LinkedList();
    const Val1 = 'haneen';
    linkedlist.insert(Val1);
    expect(linkedlist.head.value).toStrictEqual(Val1);

    const Val2 = 'khasawneh';
    linkedlist.insert(Val2);
    expect(linkedlist.head.next.value).toStrictEqual(Val2);

    const Val3 = 'Ali';
    linkedlist.insert(Val3);
    expect(linkedlist.head.next.next.value).toStrictEqual(Val3);

    expect(linkedlist.head.next.next.next).toBeNull();
    
  });


  it('return true when finding a value within the linked list that exists', () => {
    const linkedlist = new LinkedList();

    linkedlist.insert('haneen');
    linkedlist.insert('Atef');
    linkedlist.insert('Ali');
    linkedlist.insert('Alkhasawneh');

    expect(linkedlist.includes('Ali')).toBeTruthy();
    


  });


  it('return false when searching for a value in the linked list that does not exist', () => {
    const linkedlist = new LinkedList();

    linkedlist.insert('haneen');
    linkedlist.insert('Atef');
    linkedlist.insert('Ali');
    linkedlist.insert('Alkhasawneh');

    
    expect(linkedlist.includes('Ailee')).toBeFalsy();


  });


  it('return a collection of all the values that exist in the linked list', () => {
    const linkedlist = new LinkedList();

    linkedlist.insert('haneen');
    linkedlist.insert('Atef');
    linkedlist.insert('Ali');
    linkedlist.insert('Alkhasawneh');

    expect(linkedlist.toString()).toStrictEqual('{haneen} ->{Atef} ->{Ali} ->{Alkhasawneh} ->null');
    


  });


});
