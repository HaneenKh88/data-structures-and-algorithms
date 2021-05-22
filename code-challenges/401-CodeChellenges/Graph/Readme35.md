# Code Chellenge 32

### Summery:

A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.

### Graph :

A graph is a non-linear data structure that can be looked at as a collection of vertices (or nodes) potentially connected by line segments named edges.

### Challenge 

Create Class called Graph with methods (AddNode, AddEdge, GetNodes, GetNeighbors and Size).


### Approach & Efficiency
1.Create Class called Graph with methods (AddNode, AddEdge, GetNodes, GetNeighbors and Size).
2. Because its the more simple and logic for the linked list.
3. Big O: 

  - AddNode: 
  
      * Time: O(1).
      * Space: O(n).
      
  - AddEdge():
   
       * Time: O(1).
       * Space: O(m).


  - GetNodes():

       * Time: O(1).
       * Space: O(1).


  - Size(): 

       * Time: O(1).
       * Space: O(1).



### API

1. AddNode():
   - Adds a new node to the graph
   - Takes in the value of that node
   - Returns the added node


2. AddEdge():


   - Adds a new edge between two nodes in the graph
   - Include the ability to have a “weight”
   - Takes in the two nodes to be connected by the edge
   - Both nodes should already be in the Graph


3. GetNodes(): 

   - Returns all of the nodes in the graph as a collection (set, list, or similar).


4. GetNeighbors():

   - Returns a collection of edges connected to the given node
   - Takes in a given node
   - Include the weight of the connection in the returned collection


5. Size():

   - Returns the total number of nodes in the graph
   - check if the nodes are dublicated in the two array.
   - return the duplicated nodes.

***********************************************************************************************

### Pull Request Link

[tree intersection](https://github.com/HaneenKh88/data-structures-and-algorithms/pull/48)


***********************************************************************************************


### Code Challenge Check list:


- [x] install the required packeges.
- [x] write the code itself and its test.
- [x] Test the code and be sure that the test is success.
- [x] Push the code into github.
