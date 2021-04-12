let AnimalShelter = require('../fifo-animal-shelter');

class Cat {
    constructor(value) {
      this.kined = 'cat';
      this.name = value;
    }
  }
  class Dog {
    constructor(value) {
      this.kined = 'dog';
      this.name = value;
    }
  }
  describe('Animal Shelter Tests', () => {
    it('Inserts value into the AnimalShelter', () => {
      let list = new AnimalShelter();
      list.enqueue(new Cat('Vivi'));
      expect(list.node.value.kined).toEqual('cat');
    });
    it('with out inserts value into the AnimalShelter', () => {
      let list = new AnimalShelter();
      list.enqueue(new Cat('Vivi'));
      list.enqueue(new Dog('Mongo'));
      expect(list.node.value.kined).toEqual('dog');
    });
    it('dequeue value from the AnimalShelter', () => {
      let list = new AnimalShelter();
      list.enqueue(new Cat('Vivi'));
      list.enqueue(new Dog('Mongo'));
  
      expect(list.dequeue().kined).toEqual('cat');
    });
  });