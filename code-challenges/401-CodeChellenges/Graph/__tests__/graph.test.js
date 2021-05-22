"use strict";

const Graph = require('../graph');


describe("Graph Tests", () => {
 
  it("Node can be successfully added to the graph", () => {
    let graph = new Graph();
    graph.addVertex(6);
    expect(graph.Size()).toBe(1);
  });
  
  it("An edge can be successfully added to the graph", () => {
    let graph = new Graph();
    graph.addVertex(6);
    graph.addVertex(3);
    graph.addDirectedEdge(3, 6, 1);
    expect(graph.getNeighbors(3)[0].weight).toBe(1);
  });
  
  it("A collection of all nodes can be properly retrieved from the graph", () => {
    let graph = new Graph();
    graph.addVertex(3);
    graph.addVertex(6);
    
    expect(graph.GetNodes()).toBeDefined();
  });

it("All appropriate neighbors can be retrieved from the graph", () => {
    let graph = new Graph();
    graph.addVertex(3);
    graph.addVertex(6);
    graph.addDirectedEdge(3, 6, 1);
    expect(graph.getNeighbors(3)[0].vertex).toBe(6);
  });

it("Neighbors are returned with the weight between nodes included", () => {
    let graph = new Graph();
    graph.addVertex(3);
    graph.addVertex(6);
    graph.addDirectedEdge(3, 6, 9);
    expect(graph.getNeighbors(3)[0].weight).toBe(9);
  });

  it("The proper size is returned, representing the number of nodes in the graph", () => {
    let graph = new Graph();
    graph.addVertex(3);
    graph.addVertex(6);
    graph.addDirectedEdge(3, 6);
    expect(graph.Size()).toEqual(2);
  });
it("A graph with only one node and edge can be properly returned", () => {
    let graph = new Graph();
    graph.addVertex(6);
    graph.addDirectedEdge(6,6,2);
    expect(graph.Size()).toEqual(1);
  });
  
  it("An empty graph properly returns null", () => {
    let graph = new Graph();
    expect(graph.isEmpty()).toBeNull();
  });
});

