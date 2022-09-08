// Study link 1: https://www.programiz.com/dsa/merge-sort

/**
 * Steps:
 * Merge 2 subarrays A[p..q] and A[q+1..r] to create a sorted array A[p..r]. Input params to the function are A, p, q and r
 * The merge function works as follows:
 * 1. Create copies of the subarrays L ← A[p..q] and M ← A[q+1..r].
 * 2. Create three pointers i, j and k
 * 2.1 i : current index of L, starting at 1 (0)
 * 2.2 j : current index of M, starting at 1 (0)
 * 2.3 k : current index of A[p..q], starting at p.
 * 3. Until reach the end of either L or M, pick the larger among the elements from L and M and place them in the correct position at A[p..q]
 * 4. When run out of elements in either L or M, pick up the remaining elements and put in A[p..q]
 */

/**
 * Use cases: Inversion count problem, External sorting, E-commerce applications
 * Time Complexity:
 * Best, Average, Worst : Case Complexity: O(n*log n)
 * Space Complexity: O(n).
 */


/**
 * TODO: try with single helper array
 * @param {*} arr
 * @param {*} low
 * @param {*} mid
 * @param {*} high
 */
var merge = function (arr, low, mid, high) {
    const len1 = mid - low + 1;
    const len2 = high - mid;
    const left = new Array(len1);
    const right = new Array(len2);
    let i = 0, j=0, k=low;

    // Step 1
    for (let x=0; x<len1; x++) {
        left[x] = arr[low+x];
    }

    for (let x=0; x<len2; x++) {
        right[x] = arr[mid+1+x];
    }

    // step 3
    while(i<len1 && j<len2) {
        // if left[index] <= right[index], keep it
        if (left[i] <= right[j]) {
            arr[k] = left[i++];
        }
        // change the position with the right subarray
        else {
            arr[k] = right[j++];
        }
        k++;
    }

    // step 4
    while(i<len1) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while(j<len2) {
        arr[k] = right[j];
        j++;
        k++;
    }

    return arr;
}

/**
 * Take mid element
 * subarray partition (divide & conquer)
 * now merge
 *
 * @param array
 * @param low
 * @param high
 */
var mergeSort = function (array, low, high) {
    if (low < high) {
        const mid =low + parseInt((high-low)/2);
        mergeSort(array, low, mid);
        mergeSort(array, mid + 1, high);
        merge(array, low, mid, high);
    }
    return array;
}



var sort = () => {
    const array0 = [8, 7, 6, 1, 0, 9, 2];
    const array1 = [10, 7, 8, 9, 1, 5];
    const array2 = [4, 2, 8, 3, 1, 5, 7,11,6];
    console.log('result 0: ', mergeSort(array0, 0, array0.length - 1));
    console.log('result 1: ', mergeSort(array1, 0, array1.length - 1));
    console.log('result 2: ', mergeSort(array2, 0, array2.length - 1));
}

sort();
