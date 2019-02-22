// Runtime of this function is Constant
// Big O Notation: O(1)
// This function runtime is constant as size of array increases, the number of operation we perform never changes.

function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}

log([1,2,3,4,5]);
log([1,2,3,4,5,6,7,8,9,10]);



// Runtime of function : linear runtime because the runtime is porportional to the input 
// Big O Notation O(n)
// We know we have to do an opertaion on every single element in array, so as input size increases our runtime will also increases.
function logAll(array) {
    
    for (var i = 0; i< array.length; i++) {
        console.log(array[i]);
    }
}

logAll([1,2,3,4,5]);
logAll([1,2,3,4,5,6,7,8,9,10]);



// Runtime of function : Exponential runtime
// Big O Notation O(n^2)
// 
function addAndLog(array) {
    
    for (var i = 0; i< array.length; i++) {
        for (var j = 0; j< array.length; j++) {
            console.log(array[i] + array[j]);
        }
    }
}

addAndLog(['A', 'B', 'C']); // 9 paired logged out
addAndLog(['A', 'B', 'C', 'D']);
addAndLog(['A', 'B', 'C', 'D', 'E']);

// Logarithmic runtime
// Big O notation: O(log n)
// With every operation that we perform we are cutting input size as half
// It is great because even if we have huge input we are only going to be looking at a fraction of element to find one that we are searching. 
function binarySearch(array, key) {

    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}