/**
* Selection sort
* repeat list, find the smallest and swap with the leftmost unsorted
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

function selectionSort(array) {
    var min = 0;
    for(var i = 0; i < array.length; i++){
        min = i;
        for( var j = i + 1; j < array.length; j++){
            if(array[j] < array[min]) {
                min = j;
            }
        }
        if(min !== i) {
            swap(array, i, min);
        }
    }
    return array;
}

module.exports = selectionSort;

