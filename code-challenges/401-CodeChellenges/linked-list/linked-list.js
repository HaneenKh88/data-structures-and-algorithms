'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }


}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        const NewNode = new Node(value);

        if (!this.head) {
            this.head = NewNode;
            return this;
        }

        let LastNode = this.head;

        while (LastNode.next) {
            LastNode = LastNode.next;
        }
        LastNode.next = NewNode;
      
        return this;
    }

    includes(value) {
        let LastNode = this.head;

        while (LastNode.next) {
            if (LastNode.value === value) {
                return true;
            }

            LastNode = LastNode.next;
        }

        return false;

    }

    toString() {
        let LastNode = this.head;

        let StringValues = '';

        while (LastNode) {
            StringValues += `{${LastNode.value}} ->`
            LastNode = LastNode.next;
        }
        StringValues += 'null';
        return StringValues;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.size++;
            return this.head;
          }
      
          let current = this.head;
      
          while (current.next) {
            current = current.next;
          }
          current.next = new Node(value);
          this.size++;
          return this.head;
    }

    insertBefore(value, newVal) {

        
      const node = new Node(newVal); 
      if (!this.head) {
      this.head = node
      return this;
    }
    let currentNode = this.head; 
    while (currentNode.value !==value) { 
      currentNode = currentNode.next;
    }
    
    let NextNode = new Node(value); 
    NextNode.next = currentNode.next; 
    currentNode.value = node.value; 
    currentNode.next = NextNode;

    return this;
    }

    insertAfter(value, newVal) {

        let NextNode = this.head.next;
        let current = this.head;
        while (value !== current.value) {
            current = NextNode;
            NextNode = current.next;
        }

        let node = new Node(newVal);
        node.next = NextNode;
        current.next = node;
    }

    kthFromEnd(k) {
        if (this.size - 1 < k) return "out of the range";
        if (k < 0) return "please enter a positive number";
        let current = this.head;
        const arr = [];
        while (current.next) {
          arr[arr.length] = current.value;
          current = current.next;
        }
        arr[arr.length] = current.value;
        return arr[arr.length - 1 - k];
      }

      zipLists (list1,list2){
        const margeList = new LinkedList();
        let currentNode1 = list1.head;
        let currentNode2 = list2.head;
        while(currentNode1 || currentNode2){
          if(currentNode1){
            margeList.append(currentNode1.value);
            currentNode1=currentNode1.next;
          }
          if(currentNode2){
            margeList.append(currentNode2.value);
            currentNode2=currentNode2.next;
          }
        }
        let StringList = margeList.toString();
        return StringList;
      }
   
}

module.exports = LinkedList;