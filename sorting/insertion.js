/**
* Insertion sort
* repeat list, find the right location and insert
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

function insertionSort(array) {
    var temp;
    var j ;
    for(var i = 0; i < array.length; i++){
        temp = array[i];
        j = i;
        while(j >= 1 && array[j - 1] >= temp){
            array[j] = array [--j]; 
        }
        array[j] = temp;
    }
    return array;
}

module.exports = insertionSort;

