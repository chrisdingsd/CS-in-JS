'use strict';

class HashTable {
    constructor(size) {
        this.valuePairs = {};
        this.numberOfPairs = 0;
        this.size = size;
    }
    
    add(key, value) {
        const hash = this.calculateHash(key);
        if(!this.valuePairs.hasOwnProperty(hash)){
            this.valuePairs[hash] = {};
        }
        if(!this.valuePairs[hash].hasOwnProperty(key)) {
            this.numberOfPairs ++;
        }
        this.valuePairs[hash][key] = value;
    }
    
    remove(key) {
        const hash = this.calculateHash(key);
        if(this.valuePairs.hasOwnProperty(hash) && this.valuePairs[hash].hasOwnProperty[key]) {
            delete this.valuePairs[hash][key];
            this.numberOfPairs--;
        }
    }
    
    calculateHash (key){
        return key.toString().length % this.size;
    }
    
    search(key) {
        const hash = this.calculateHash(key);
        if(this.valuePairs.hasOwnProperty(hash) && this.valuePairs[hash].hasOwnProperty[key]) {
            return this.valuePairs[hash][key];
        }
        else {
            return null;
        }
    }
    
    length() {
        return this.numberOfPairs;
    }
    
    print() {
        let string = '';
        for(const hash in this.valuePairs){
            for(const key in this.valuePairs[hash]){
                string += this.valuePairs[hash][key];
            }
        }
        console.log(string.trim());
        console.log(this.valuePairs);
    }
}

const ht = new HashTable(3);
ht.add('first', '1');
ht.add('second', '2');
ht.add('third', '3');
ht.print();
ht.add('first', '5');
ht.print();