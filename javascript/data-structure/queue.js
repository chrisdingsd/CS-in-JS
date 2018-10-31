import {MyArray} from "./array.js";

class Queue  extends MyArray{
    constructor(){
        super();
    }
    
    dequeue(){
        return this.array.shift();
    }
    
    push(data) {
        return this.array.push(data);
    }
}

const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.print();
q.dequeue();
q.print();