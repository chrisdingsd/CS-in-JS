"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _array = require("./array.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queue = function (_MyArray) {
    _inherits(Queue, _MyArray);

    function Queue() {
        _classCallCheck(this, Queue);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Queue).call(this));
    }

    _createClass(Queue, [{
        key: "dequeue",
        value: function dequeue() {
            return this.array.shift();
        }
    }, {
        key: "push",
        value: function push(data) {
            return this.array.push(data);
        }
    }]);

    return Queue;
}(_array.MyArray);

var q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.print();
q.dequeue();
q.print();