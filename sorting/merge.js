/**
* Merge sort
* divide list into sublists, then repeatedly merge
*
* Complexity
* Time Complexity
* Best O(nlog(n))   Average O(nlog(n))  Worst O(nlog(n))
* 
* Space Complexity
* Worse O(n) 
*
* Recursively top-down implementation is easier than iteratively bottom-up
**/


function merge(left, right) {
    var result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] > right[0]){
            result.push(right.shift());
        } else {
            result.push(left.shift());
        }
    }
    
    result = result.concat(left).concat(right);
    
    // delete two temp arrays' remaining elements and GC them
    left.splice(0, left.length);
    right.splice(0, right.length);
    
    return result;
}

function sort(array) {
    if(array.length < 2){
        return array;
    }
    
    var middle = Math.floor(array.length /2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    
    return merge(sort(left), sort(right));
}

module.exports = sort;





