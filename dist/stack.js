"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
    function Stack() {
        _classCallCheck(this, Stack);

        this.stack = [];
    }

    _createClass(Stack, [{
        key: "push",
        value: function push(data) {
            this.stack.push(data);
        }
    }, {
        key: "pop",
        value: function pop() {
            return this.stack.pop();
        }
    }, {
        key: "peek",
        value: function peek() {
            return this.stack[this.stack.length - 1];
        }
    }, {
        key: "length",
        value: function length() {
            return this.stack.length;
        }
    }, {
        key: "print",
        value: function print() {
            console.log(this.stack.join(''));
        }
    }]);

    return Stack;
}();

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();