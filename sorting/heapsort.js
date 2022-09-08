// Study link 1: https://www.programiz.com/dsa/heap-sort

/**
 * For heap: need to convert an array to complete binary tree
 * If the index of any element in the array is i,
 * * left child = the element in the index 2i+1; right child = element in 2i+2 index. Also, the parent of any element at index i is given by the lower bound of (i-1)/2.
 * 2 type of heap: Max-heap, Min-heap, normally Max-heap is followed
 *
 * Steps:
 * 1. Need a heapify process to create Max-heap/Min-heap recursively. Max-heap store the largest value in top of the tree/ 0th index
 * 2. Sort using that Max-heap array::
 * * For Max-Heap property, the largest item is stored at the root node (0th index).
 * * 2.1 Swap: Remove the root element and put at the end of the array (nth position) Put the last item of the tree (heap) at the vacant place.
 *              [always swap with the 0th index with current index]
 * * 2.2 Remove: Reduce the size of the heap by 1.
 * * 2.3 Heapify: Heapify the root element again so that we have the highest element at root.
 * * Repeat the process until all the items of the list are sorted.
 *
 * 3. Until reach the end of either L or M, pick the larger among the elements from L and M and place them in the correct position at A[p..q]
 * 4. When run out of elements in either L or M, pick up the remaining elements and put in A[p..q]
 */

/**
 * Use cases:
 * 1. Systems concerned with security and embedded systems such as Linux Kernel.
 *      (because of  O(n log n) upper bound on Heapsort's running time and constant O(1) upper bound on its auxiliary storage).
 * 2. for the worst case, it has O(n log n) time complexity, it doesn't have more applications ( compared to other sorting algo like Quick, Merge ).
 *      However, its data structure,heap, can be efficiently used if we want to extract the smallest/largest from the list of items without the overhead of keeping
 *      the remaining items in the sorted order. For e.g Priority Queues.
 * 3. Mainly used in hybrid algorithms like the IntroSort.
 * 4. Sort a nearly sorted (or K sorted) array
 * 5. k largest(or smallest) elements in an array (Priority Queues.)
 *
 * Time Complexity:
 * Best, Average, Worst: O(n*log n)
 * Space Complexity: O(1). No extra needed
 */


/**
 * @param {*} arr
 * @param {*} size
 * @param {*} rootIndex
 */
var heapify = function (arr, size, rootIndex) {
    let largestIndex = rootIndex;
    let leftIndex  = 2 * rootIndex + 1;
    let rightIndex  = 2 * rootIndex + 2;

    if ( leftIndex < size && arr[leftIndex] > arr[largestIndex]) {
        largestIndex = leftIndex;
    }

    if ( rightIndex < size && arr[rightIndex] > arr[largestIndex]) {
        largestIndex = rightIndex;
    }

    if (largestIndex != rootIndex) {
        [arr[largestIndex], arr[rootIndex]] = [arr[rootIndex], arr[largestIndex]];
        arr = heapify(arr, size, largestIndex);
    }

    return arr;
}


/**
 * Build Max-heap: Bottom-top approach
 * Heap sort: swap, remove, heapify
 * @param array
 * @param len
 */
var heapSort = function (array, len) {
    // Build Max-heap
    for (let i=Math.floor((len/2)) - 1; i>=0; i-- ) {
        array = heapify(array, len, i)
    }

    // Heap sort: swap, remove, heapify
    for (let i=len - 1; i>=0; i-- ) {
        // swap
        [array[0], array[i]] = [array[i], array[0]];
        // remove root element to the last index
        array = heapify(array, i, 0)
    }

    return array;
}



var sort = () => {
    const array0 = [8, 7, 6, 1, 0, 9, 2];
    const array1 = [10, 7, 8, 9, 1, 5];
    const array2 = [4, 2, 8, 3, 1, 5, 7,11,6];
    console.log('result 0: ', heapSort(array0, array0.length));
    console.log('result 1: ', heapSort(array1, array1.length));
    console.log('result 2: ', heapSort(array2, array2.length));
}

sort();
