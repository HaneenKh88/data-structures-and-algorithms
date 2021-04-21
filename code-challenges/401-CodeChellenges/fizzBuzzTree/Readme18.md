# Code Chellenge 18

### Summery:

Create a fizzBuzzTree function with its properties and its tests.


### Challenge 

1.function called FizzBuzzTree which takes a k-ary tree as an argument. determine whether or not the value of each node is divisible by 3, 5 or both.


### Approach & Efficiency
1. Method called breadth first traversal method which takes a Binary Tree as its unique input. traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.
2. Because its the more simple and logic for the linked list.
3. Big O: 
   - Time: O(n)
   - Space: O(h)


### API

1. Create function FizzBuzzTree() that takes a kary tree as an input. 
2. check if the tree is empty, if yes return an exception.  
3. Declare a new tree to push the encountered edited value to.  
4. Create a queue to add the nodes to FIFO as long as the queue has values, keep iterating over the tree to check all the children (breadth approach).
5. check the queue front value, if it is divisible by 3 and 5, add a node to the new tree with 'FizzBuzz' value, if it is divisible by 3, add 'Fizz', if it is divisible by 5, add 'Buzz'.  
6. return the new tree.

***********************************************************************************************
### Pull Request Link

[Fizz Buzz Tree](https://github.com/HaneenKh88/data-structures-and-algorithms/pull/36)


***********************************************************************************************
### White Board Image:

![White Board](https://github.com/HaneenKh88/data-structures-and-algorithms/blob/main/code-challenges/401-CodeChellenges/assests/codechallenge18.png)

Note: collaborative with Afnan and Faten.


***********************************************************************************************

### Code Challenge Check list:

- [x] White Board Wireframe.
- [x] install the required packeges.
- [x] write the code itself and its test.
- [x] Test the code and be sure that the test is success.
- [x] Push the code into github.
