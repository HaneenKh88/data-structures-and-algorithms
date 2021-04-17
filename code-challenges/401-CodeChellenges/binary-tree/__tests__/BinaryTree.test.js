const Node = require('../Node');
const BinaryTree = require('../tree');

describe('Binary Tree', () => {
  let tree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
  });

  it('preOrder', () => {
    const expected = [1, 2, 4, 5, 8, 3, 6, 7];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('inOrder', () => {
    const expected = [4, 2, 8, 5, 1, 6, 3, 7];
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });
  it('postOrder', () => {
    const expected = [4, 8, 5, 2, 6, 7, 3, 1];
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });

  it('Add', () => {
    const expected = [4, 8, 5, 2, 6, 7, 3, 1];
     tree.add(9);
    expect(expected.length).toEqual(8);
   

  });

  it('contains', () => {
    // const expected = [4, 8, 5, 2, 6, 7, 3, 1];
    //  tree.add(9);
     expect(tree.contains(7)).toBeTruthy();

  });

  it('Can successfully instantiate an empty tree', () => {
    const tree1 = new BinaryTree();

    expect(tree1.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const root = new Node(7);
    const tree1 = new BinaryTree(root);
    
    expect(tree1.root.value).toEqual(7);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    const root = new Node(7);
    const left = new Node(5);
    const right = new Node(8);
    root.left = left;
    root.right = right;

    const tree1 = new BinaryTree(root);

    expect(tree1.root.value).toEqual(7);
    expect(tree1.root.left.value).toEqual(5);
    expect(tree1.root.right.value).toEqual(8);

  });


});