var bubble = require("./bubble.js");
var selection = require("./selection.js");
var insertion = require("./insertion.js");
var merge = require("./merge.js");
var quicksort = require("./quicksort.js");
var _ = require("lodash");

/* Array.slice()  to deepClone an array. Duh!*/

var testbench = {
    best : [1,2,3,4,5,6,7,8,9,10],
    worst : [10, 9,8,7,6,5,4,3,2,1],
    avg : [9,2,5,7,4,6,3,1,10,8]
};


console.log("Before sort: " + testbench.avg);
console.log("After bubble sort: " + bubble(_.cloneDeep(testbench.avg)));
console.log("After selection sort: " + selection(_.cloneDeep(testbench.avg)));
console.log("After insertion sort: " + insertion(_.cloneDeep(testbench.avg)));
console.log("After merge sort: " + merge(_.cloneDeep(testbench.avg)));
console.log("After  quicksort: " + quicksort(_.cloneDeep(testbench.avg)));


