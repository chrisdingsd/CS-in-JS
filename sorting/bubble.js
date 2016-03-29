/**
* Bubble sort
* repeat list, compares each other and swap them if applicable
*
* Complexity
* Time Complexity
* Best O(n)   Average O(n^2)  Worst O(n^2)
* 
* Space Complexity
* Worse O(1)  in-place
**/

/**
* Although this is a in-place sort, I wonder I could write a pure function 
* version of bubble sort
**/


function swap(array, i, j) {
    array[i] = array[i] ^ array[j];
    array[j] = array[i] ^ array[j];
    array[i] = array[i] ^ array[j];
}

function bubbleSort(array) {
    for(var i = 0; i < array.length; i++){
        for( var j = 1; j < array.length; j++){
            if(array[j-1] > array[j]) {
                swap(array, j-1, j);
            }
        }
    }
    return array;
}

module.exports = bubbleSort;

