'use strict';

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfNodes = 0;
    }
    
    add(data) {
        const node = new Node(data);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.numberOfNodes++;
    }
    
    remove(data) {
        let previous = this.head;
        let current = this.head;
        
        while(current) {
            if(current.data === data){
                if(current === this.head ){
                    this.head = this.head.next;
                }
                if(current === this.tail){
                    this.tail = previous
                }
                previous.next = current.next;
                this.numberOfNodes --;
            } else {
                previous = current;
            }
            current = current.next;
        }
    }
    
    insertAfter(data, toNodeData) {
        let current = this.head;
        while(current) {
            if(current.data === toNodeData){
                const node = new Node(data);
                if(current === this.tail){
                    this.tail.next = node;
                    this.tail = node;
                } else {
                    node.next = current.next;
                    current.next = node;
                }
                this.numberOfNodes ++;
            }
            current = current.next;
        }
    }
    
    traverse (fn) {
        let current = this.head;
        while(current){
            if(fn){
                fn(current);
            }
            current = current.next;
        }
    }
    
    length() {
        return this.numberOfNodes;
    }
    
    print(){
        let string = '';
        let current = this.head;
        while(current) {
            string += current.data;
            current = current.next;
        }
        console.log(string.trim());
    }
    
}

const sll = new SingleLinkedList();
sll.print();
sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);
sll.print();
sll.insertAfter(6,3);
sll.print();
sll.traverse(node => {node.data += 10;})
sll.print();