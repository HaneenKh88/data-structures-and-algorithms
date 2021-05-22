'use strict';

const HashTable = require('../HashTable');


describe('Hash Table testing', () => {

    it('Create a Hashed table', () => {
        let Hash = new HashTable(100);

        // let HashTable = new HashTable(100);
        expect(Hash.table.length).toEqual(100);
    });

    it('Adding a key/value to hashtable results in the value being in the data structure', () => {
        let Hash = new HashTable(100);
        Hash.add("one", "haneen");
        // let HashTable = new HashTable(100);
        expect(Hash.contains("one")).toEqual(true);
    });

    it('Retrieving based on a key returns the value stored', () => {
        let Hash = new HashTable(100);
        Hash.add("one", "haneen");
        // let HashTable = new HashTable(100);
        expect(Hash.get("one")).toEqual("haneen");
    });

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        let Hash = new HashTable(100);
        // Hash.add("one", "haneen");
        // let HashTable = new HashTable(100);
        expect(Hash.get("two")).toEqual(null);
    });

    it('Successfully handle a collision within the hashtable', () => {
        let Hash = new HashTable(100);
        Hash.add("one", "haneen");
        Hash.add("two", "haneen");

        // let HashTable = new HashTable(100);
        expect(Hash.contains('one')).toBeTruthy();
        expect(Hash.contains('two')).toBeTruthy();
    });

    // it('Successfully return true if he found the value of the key and return false if its not', () => {
    //     let Hash = new HashTable(100);
    //     Hash.add("one", "haneen");
    //     expect(Hash.contains('one')).toBeTruthy();
    //     expect(Hash.contains(null)).toBeFalsy();

    // });

    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        let Hash = new HashTable(100);
        Hash.add("one", "haneen");
        Hash.add("two", "haneen");
        expect(Hash.get("one")).toEqual("haneen");
        expect(Hash.get("two")).toEqual("haneen");
        
    });

    
    it('Successfully hash a key to an in-range value', () => {
        let Hash = new HashTable(1);
        expect(Hash.hash("haneen")).toBeLessThanOrEqual(1);
    });


});