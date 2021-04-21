const { Node, KArrayTree, fizzBuzzTree} = require('../../fizzBuzzTree/FizzBuzzTree');

describe('Fizz Buzz Tree', () => {
    let tree;
    const one = new Node(1);
    const two = new Node(3);
    const three = new Node(5);
    const four = new Node(15);
    const five = new Node(17);

    one.result = [two,three,four,five];
  
    tree = new KArrayTree(one);
    Newtree = fizzBuzzTree(tree);
    

    it("value is divisible by 3, replace the value with Fizz" , () => {
  
     
      expect(Newtree.root.result[0].value).toEqual('Fizz');


    });

    it("value is divisible by 5, replace the value with Buzz" , () => {
  
      expect(Newtree.root.result[1].value).toEqual('Buzz');
     
    });

    it("value is divisible by 3 and 5, replace the value with FizzBuzz" , () => {
  
      expect(Newtree.root.result[2].value).toEqual('FizzBuzz');
     
    });

    it("If the value is not divisible by 3 or 5, simply turn the number into a String" , () => {
  
      expect(Newtree.root.result[3].value).toEqual(`17`);
     
    });

    it("If the value not found then well back as an empty tree" , () => {
      tree1 = new KArrayTree();
      
      
      expect(fizzBuzzTree(tree1)).toEqual('The Tree is empty');
     
    });
});  