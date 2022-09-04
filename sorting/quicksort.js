// Study link 1: https://www.programiz.com/dsa/quick-sort

/**
 * Steps:  
 * 1. Pick a pivot element: either 1st one | last one | random element | median element (Normally high is taken)
 * 2. Divide all other elements (except the pivot) into two partitions.
 * 2.1  All elements < pivot must be in the first partition.
 * 2.2  All elements > pivot must be in the second partition.
 * 3. Use recursion to sort both partitions.
 * 4. Join the first sorted partition, the pivot, and the second sorted partition.
 */

/*var swapElements = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
*/

/**
 * Take last element as pivot
 * @param {*} arr
 * @param {*} low 
 * @param {*} high 
 */
var partitionHigh = function (arr, low, high) {
    let pivot = arr[high];
    let i = low-1;
    for (let j=low; j<high; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            i++;
            // arr = swapElements(arr, i, j);
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]]
    // arr = swapElements(arr, i + 1, high);
    return i+1;
}

/**
 * Take 1st element as pivot
 * @param {*} arr
 * @param {*} low 
 * @param {*} high 
 * @return int
 */
var partitionLow = function (arr, low, high) {
    let i = low;
    let j = high;
    const pivot = arr[low];
    while (i<j) {
        while(pivot >= arr[i]) {
            i++;
        }
        while (pivot < arr[j]) {
            j--;
        }
        if (i<j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]]
    return j;
}

/**
 * @param {*} array 
 */
var quickSort = function (array, low, high) {
    if (low < high) {
        // Step 1
        const partition = partitionHigh (array, low, high);
        // const partition = partitionLow (array, low, high);
        // step 2-4
        array = quickSort(array, low, partition - 1);
        array = quickSort(array, partition + 1, high);
    }
    return array;
}


const array0 = [8, 7, 6, 1, 0, 9, 2];
const array1 = [10, 7, 8, 9, 1, 5];
const array2 = [4, 2, 8, 3, 1, 5, 7,11,6];

console.log('result 0: ', quickSort(array0, 0, array0.length - 1));
console.log('result 1: ', quickSort(array1, 0, array1.length - 1));
console.log('result 2: ', quickSort(array2, 0, array2.length - 1));