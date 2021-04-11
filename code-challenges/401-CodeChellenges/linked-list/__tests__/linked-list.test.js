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
  it('add a node to the end of the linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('haneen');
    linkedlist.append('faten');
    expect(linkedlist.toString()).toStrictEqual('{haneen} ->{faten} ->null');
  });

  it('add multiple nodes to the end of a linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('haneen');
    linkedlist.append('faten');
    linkedlist.append('raghad');
    expect(linkedlist.toString()).toStrictEqual('{haneen} ->{faten} ->{raghad} ->null');
  });

  it('add multiple nodes to the end of a linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('haneen');
    linkedlist.append('faten');
    linkedlist.append('raghad');
    linkedlist.insertBefore('raghad','Amani');

    expect(linkedlist.toString()).toStrictEqual('{haneen} ->{faten} ->{Amani} ->{raghad} ->null');
  });

  it('add multiple nodes to the end of a linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('haneen');
    linkedlist.insert('faten');
    linkedlist.insert('raghad');
    linkedlist.insertBefore('haneen','Amani');

    expect(linkedlist.toString()).toStrictEqual('{Amani} ->{haneen} ->{faten} ->{raghad} ->null');
  });

  it(' insert after a node in the middle of the linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('haneen');
    linkedlist.append('faten');
    linkedlist.append('raghad');
    linkedlist.insertAfter('faten','Amani');

    expect(linkedlist.toString()).toStrictEqual('{haneen} ->{faten} ->{Amani} ->{raghad} ->null');
  });

  it(' insert after a node in the middle of the linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('haneen');
    linkedlist.append('faten');
    linkedlist.append('raghad');
    linkedlist.insertAfter('raghad','Amani');

    expect(linkedlist.toString()).toStrictEqual('{haneen} ->{faten} ->{raghad} ->{Amani} ->null');
  });

  it('Where k is greater than the length of the linked list', () => {
    let ll= new LinkedList;
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    
    expect(ll.size).toEqual(3);
    expect(ll.kthFromEnd(10)).toEqual('out of the range');
  });

  it('Where k and the length of the list are the same', () => {
    let ll= new LinkedList;
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
   
    expect(ll.size).toEqual(3);
    expect(ll.kthFromEnd(2)).toEqual(2);
  });

  it('Where k is not a positive integer', () => {
    let ll= new LinkedList;
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
   
    expect(ll.size).toEqual(3);
    expect(ll.kthFromEnd(-2)).toEqual('please enter a positive number');
  });

  it('Where the linked list is of a size 1', () => {
    let ll= new LinkedList;
    ll.append(1);
   
    expect(ll.size).toEqual(1);
    expect(ll.kthFromEnd(0)).toEqual(1);
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let ll= new LinkedList;
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
   
    expect(ll.size).toEqual(3);
    expect(ll.kthFromEnd(2)).toEqual(2);
  });


  describe('Linked List', () => {
    it('Should merge two linked lists even when size is different', () => {
      let ll= new LinkedList;
      let list1 = new LinkedList;
      let list2 = new LinkedList;
      
      list1.append('1');
      list1.append('2');
      list1.append('3');
      list2.append('4');
      list2.append('5');
      list2.append('6');
      
      expect(ll.zipLists(list1, list2)).toBe('{1} ->{4} ->{2} ->{5} ->{3} ->{6} ->null');
    });

    it('Should return first list if the second list is empty', () => {
      let ll= new LinkedList;
      let list1 = new LinkedList;
      let list2 = new LinkedList;
      
      list1.append('1');
      list1.append('2');
      list1.append('3');
      
      
      expect(ll.zipLists(list1, list2)).toBe('{1} ->{2} ->{3} ->null');
    });

    it('Should return second list if the first list is empty', () => {
      let ll= new LinkedList;
      let list1 = new LinkedList;
      let list2 = new LinkedList;
      
      list2.append('4');
      list2.append('5');
      list2.append('6');
      
      
      expect(ll.zipLists(list1, list2)).toBe('{4} ->{5} ->{6} ->null');
    });


    it("test in case that the list is empty", () => {
      let ll= new LinkedList;
      const ll1 = new LinkedList();
      const ll2 = new LinkedList();
      expect(ll.zipLists(ll1, ll2)).toEqual("null");
    });
});
});
