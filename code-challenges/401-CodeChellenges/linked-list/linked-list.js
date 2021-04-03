'use strict';

class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }


}

class LinkedList
{
    constructor()
    {
        this.head = null;
    }

   insert(value)
   {
     const NewNode = new Node(value);

     if(!this.head)
     {
         this.head = NewNode;
         return this;
     }

     let LastNode = this.head;
     
     while (LastNode.next)
     {
        LastNode = LastNode.next;
     }
      LastNode.next = NewNode;
      return this;
   }

   includes(value)
   {
    let LastNode = this.head;
     
    while (LastNode.next)
    {
      if(LastNode.value === value)
      {
          return true;
      }

      LastNode = LastNode.next;
    }
     
     return false;
  
   }

   toString()
   {
    let LastNode = this.head;

    let StringValues = '';

    while(LastNode)
    {
        StringValues += `{${LastNode.value}} ->`
        LastNode = LastNode.next;
    }
    StringValues += 'null';
    return StringValues;
   }

} 

module.exports = LinkedList;