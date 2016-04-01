'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
    _classCallCheck(this, Node);

    this.data = data;
    this.next = null;
};

var SingleLinkedList = function () {
    function SingleLinkedList() {
        _classCallCheck(this, SingleLinkedList);

        this.head = null;
        this.tail = null;
        this.numberOfNodes = 0;
    }

    _createClass(SingleLinkedList, [{
        key: 'add',
        value: function add(data) {
            var node = new Node(data);
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;
            }
            this.numberOfNodes++;
        }
    }, {
        key: 'remove',
        value: function remove(data) {
            var previous = this.head;
            var current = this.head;

            while (current) {
                if (current.data === data) {
                    if (current === this.head) {
                        this.head = this.head.next;
                    }
                    if (current === this.tail) {
                        this.tail = previous;
                    }
                    previous.next = current.next;
                    this.numberOfNodes--;
                } else {
                    previous = current;
                }
                current = current.next;
            }
        }
    }, {
        key: 'insertAfter',
        value: function insertAfter(data, toNodeData) {
            var current = this.head;
            while (current) {
                if (current.data === toNodeData) {
                    var node = new Node(data);
                    if (current === this.tail) {
                        this.tail.next = node;
                        this.tail = node;
                    } else {
                        node.next = current.next;
                        current.next = node;
                    }
                    this.numberOfNodes++;
                }
                current = current.next;
            }
        }
    }, {
        key: 'traverse',
        value: function traverse(fn) {
            var current = this.head;
            while (current) {
                if (fn) {
                    fn(current);
                }
                current = current.next;
            }
        }
    }, {
        key: 'length',
        value: function length() {
            return this.numberOfNodes;
        }
    }, {
        key: 'print',
        value: function print() {
            var string = '';
            var current = this.head;
            while (current) {
                string += current.data;
                current = current.next;
            }
            console.log(string.trim());
        }
    }]);

    return SingleLinkedList;
}();

var sll = new SingleLinkedList();
sll.print();
sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);
sll.print();
sll.insertAfter(6, 3);
sll.print();
sll.traverse(function (node) {
    node.data += 10;
});
sll.print();