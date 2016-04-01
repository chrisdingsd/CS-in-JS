/**
* Let's write some JavaScript in Java Style!
*/

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyArray = function () {
    function MyArray() {
        _classCallCheck(this, MyArray);

        this.array = [];
    }

    _createClass(MyArray, [{
        key: 'add',
        value: function add(data) {
            this.array.push(data);
        }
    }, {
        key: 'remove',
        value: function remove(data) {
            this.array.filter(function (current) {
                return current !== data;
            });
        }
    }, {
        key: 'search',
        value: function search(data) {
            var foundIndex = this.array.indexOf(data);
            return !foundIndex ? foundIndex : null;
        }
    }, {
        key: 'getAtIndex',
        value: function getAtIndex(index) {
            return this.array[index];
        }
    }, {
        key: 'length',
        value: function length() {
            return this.array.length;
        }
    }, {
        key: 'print',
        value: function print() {
            console.log(this.array.join(''));
        }
    }]);

    return MyArray;
}();

exports.MyArray = MyArray;


var array = new MyArray();
array.add(1);
array.add(2);

array.print();