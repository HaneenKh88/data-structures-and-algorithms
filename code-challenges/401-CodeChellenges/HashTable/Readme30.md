# Code Chellenge 30

### Summery:

#### Hash Table:

data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

### Challenge 

Create class for node, Linked list and Hashtree with its methods (Hash method, Add method, Get method, Contain Method).


### Approach & Efficiency
1. Create class for node, Linked list and Hashtree with its methods.
2. Because its the more simple and logic for the linked list.
3. Big O: 

* hash function: 

   - Time: O(1)
   - Space: O(1)

* add function: 

   - Time: O(1)
   - Space: O(1)


* get function: 

   - Time: O(n)
   - Space: O(1)


* contains function: 

   - Time: O(1)
   - Space: O(1)


### API

1. add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. get: takes in the key and returns the value from the table.
3. contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
4. hash: takes in an arbitrary key and returns an index in the collection.


***********************************************************************************************
### Pull Request Link

[Insertion Sort](https://github.com/HaneenKh88/data-structures-and-algorithms/pull/41)


***********************************************************************************************


### Code Challenge Check list:


- [x] install the required packeges.
- [x] write the code itself and its test.
- [x] Test the code and be sure that the test is success.
- [x] Push the code into github.
