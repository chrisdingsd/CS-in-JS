/**
* Selection sort
* find pivot, partition, sort and repeat this
*
* Time Complexity
* Best O(nlog(n))   Average O(nlog(n))  Worst O(n^2)
* 
* Space Complexity
* Worse O(nlog(n)) 
**/



function swap(array, i, j) {
    array[i] = array[i] ^ array[j];
    array[j] = array[i] ^ array[j];
    array[i] = array[i] ^ array[j];
}

function partition(array, left, right) {
    var pivot = array[Math.floor(right + left) /2]; // pivot could be the first, last, middle or other complicatedly computed value
    var i = left;
    var j = right;
    
    while( i <= j) {
        while(array[i] <= pivot){
            i++;
        }
        while(array[j] >= pivot) {
            j++;
        }
        if(i < j) {
            swap(array, i, j);
            i++;
            j--;
        }
    }
    
    return i;
}

function sort(array, left, right) {
    if(array.length < 2) {
        return array;
    }
    
    left = typeof left !== "number" ? 0 : left; 
    right = typeof right !== "number" ? array.length - 1 : right;
    
    index = partition(array, left, right);
    
    if(left < index - 1) {
        sort(array, left, index - 1);
    }
    if(right > index ) {
        sort(array, index, right);
    }
    
    return array;
}

module.exports = sort;

