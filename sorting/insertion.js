// Study link 1: https://www.programiz.com/dsa/insertion-sort

/**
 * Say, in your moneybag, there are different types of notes and you want to keep these serially from lesser to a higher value. How will you do it?
 *
 * - You skip your 1st note, then compare the value of 2nd note with the 1st one.
 * - If the 2nd one is less than the 1st one, change their positions. 1st 2 notes are sorted now.
 * - Now, you take the 3rd note. You will compare it with the previous notes one by one. You won't change its position if it is bigger than the previous two. Otherwise, you will change the position of the note until it is no longer smaller than its previous note.
 * - You will follow the same procedure for the rest of the notes. Compare with the previous notes one by one until you find its suitable position.
 *
 * That's it. You are applying insertion sort.
 */

/**
 * Use cases: array is has a small number of elements, only a few elements left to be sorted
 * Time Complexity: Best, Average, Worst : Case Complexity: O(n), O(n^2), O(n^2)
 * Space Complexity: O(1).
 */


/**
 * @param arr
 */
var insertionSort = function (arr) {
    /**
     * skip 1st: loop through from 2nd position to < length
     * take current position as key
     * take another variable, previous of current position, j = curr - 1;
     * Check until key>= current value and j>=0 (goes to 1st index)
     **  Set position j+1 with jth position, i.e. increase position of the smaller one by one to the right
     **  decrease position j
     *  Now, after loop ends , Set key value at j+1 position
     */
    for(let curr=1; curr<arr.length; curr++)
    {
        let key = arr[curr];
        let j = curr -1;
        while(key < arr[j] && j>=0) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }

    return arr;
}



var sort = () => {
    const array0 = [8, 7, 6, 1, 0, 9, 2];
    const array1 = [10, 7, 8, 9, 1, 5];
    const array2 = [4, 2, 8, 3, 1, 5, 7,11,6];
    console.log('result 0: ', insertionSort(array0));
    console.log('result 1: ', insertionSort(array1));
    console.log('result 2: ', insertionSort(array2));
}

sort();
