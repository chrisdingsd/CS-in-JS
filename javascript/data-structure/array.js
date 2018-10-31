/**
* Let's write some JavaScript in Java Style!
*/

'use strict';

class MyArray {
    constructor() {
        this.array = [];
    }
    
    add(data) {
        this.array.push(data);
    }
    
    remove(data) {
        this.array.filter(current => current !== data);
    }
    
    search(data) {
        const foundIndex = this.array.indexOf(data);
        return !foundIndex ? foundIndex : null;
    }
    
    getAtIndex(index) {
        return this.array[index];
    }
    
    length() {
        return this.array.length;
    }
    
    print() {
        console.log(this.array.join(''));
    }
}

export { MyArray };

const array = new MyArray();
array.add(1);
array.add(2);

array.print();