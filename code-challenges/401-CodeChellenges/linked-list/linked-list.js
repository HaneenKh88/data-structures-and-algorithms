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
        let LastNode = this.head;

        if (!LastNode) {
            LastNode = new Node(value);
        }

        else {
            while (LastNode.next) {
                LastNode = LastNode.next;
            }

            LastNode.next = new Node(value);
        }
    }

    insertBefore(value, newVal) {

        // if (value === this.head.value) {
        //     this.insert(newVal);
        //     return;
        // }

        // else {
        //     let current = this.head;
        //     let previous;
        //     while (value !== current.value) {
        //         previous = current;
        //         current = current.next;
        //     }

        //     let NewNode = new Node(newVal);
        //     NewNode.next = current;
        //     previous.next = NewNode;
        // }

        
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


   
}

module.exports = LinkedList;