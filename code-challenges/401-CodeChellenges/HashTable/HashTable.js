
const LinkedList = require('../linked-list/linked-list')

class HashTable {
  constructor(size)
  {
    this.table = new Array(size);
  }
 

  hash(key) {
    let HashStr = key.split('').reduce((HashKey,value) =>
    {
      let result = HashKey + value.charCodeAt(0);
      return result;
    }, 0)

    return (HashStr * 599) % this.table.length;
  }


  add(key, value) {
    let hash = this.hash(key);
    //if contains a key, do nothing

    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();//LL
    }

    this.table[hash].append({[key]: value});
  }

  

  get(key) {
    // return value;
    let hash = this.hash(key);

    if(this.contains(key))
    {
      if(this.table[hash].head)
      {
        let current = this.table[hash].head;
        let OBJkey = Object.keys(current.value)
      if(OBJkey[0] === key)
      {
        return current.value[key];
      }

      while (current.next)
      {
        current = current.next;
        if(OBJkey[0] === key)
        {
          return current.value[key];
        }
      }
      }
    }

    else
    {
    return 'not found';
    }
  
  }
  

  contains(key) {
    // return Boolean;
    let hash = this.hash(key);
    if(this.table[hash])
    return true;

    else
    return false;
  }
  }

module.exports = HashTable;