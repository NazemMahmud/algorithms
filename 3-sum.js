/** Javascript program to find a triplet */

/**
 * Naive approach: returns true if there is triplet with sum equal
 * to 'sum' present in A[].
 * Also, prints the triplet
 * O(n ^ 3), O(1)
 **/
function find3NumbersNaive(A, sum) {
    const arr_size = A.length;

    // Fix the first element as A[i]
    for (let i = 0; i < arr_size - 2; i++) {
        // Fix the second element as A[j]
        for (let j = i + 1; j < arr_size - 1; j++) {
            // Now look for the third number
            for (let k = j + 1; k < arr_size; k++) {
                if (A[i] + A[j] + A[k] === sum) {
                    console.log("Triplet is " + A[i] + ", " + A[j] + ", " + A[k]);
                    return true;
                }
            }
        }
    }

    // If we reach here, then no triplet was found
    return false;
}

/**
 * AKA Two Pointer
 * Approach: By Sorting the array. Traverse the array and fix the first element of the triplet.
 * Now use the Two Pointers algo to find if there is a pair whose sum is equal to x – array[i].
 * Two pointers algorithm take linear time so it is better than a nested loop.
 * O(n ^ 2), O(1)
 * @param A
 * @param sum
 */
function find3NumbersTwoSum(A, sum) {
    let left, right;
    let arr_size = A.length;

    /** Sort the elements */
    A.sort((a, b) => a - b);

    /** Now fix the first element one by one and find the other two elements */
    for (let i = 0; i < arr_size - 2; i++) {
        /**
         *  To find the other two elements:
         *  start two index variables from two corners of the array and
         *  move them toward each other
         */

        // index of the first element
        left = i + 1;
        // index of the last element
        right = arr_size - 1;
        while (left < right) {
            if (A[i] + A[left] + A[right] === sum) {
                console.log("Triplet is " + A[i] + ", " + A[left] + ", " + A[right]);
                return true;
            } else if (A[i] + A[left] + A[right] < sum)
                left++;
            else right--; // A[i] + A[l] + A[r] > sum
        }
    }

    // If we reach here, then no triplet was found
    return false;
}

/**
 * Approach: This approach uses extra space, but simpler than the two-pointers approach.
 * Run two loops: outer loop => from start to end; inner loop => from i+1 to end.
 * Create a hashmap / set to store the elements in between i+1 to j-1.
 * So if the given sum is x, check if there is a number in the set which is equal to x – arr[i] – arr[j].
 * If yes print the triplet.
 * O(n ^ 2), O(n)
 * @param A
 * @param sum
 */
function find3NumbersHash(A, sum) {
    const arr_size = A.length;
    // Fix the first element as A[i]
    for (let i = 0; i < arr_size - 2; i++) {

        /** Find pair in subarray A[i+1..n-1], with sum equal to sum - A[i] */
        let s = new Set();
        let curr_sum = sum - A[i];
        for (let j = i + 1; j < arr_size; j++)
        {
            // 2 7 5 11 // 9 -7 2
            if (s.has(curr_sum - A[j]))
            {
                console.log("Triplet is " +A[i]+", "+A[j]+", "+ (curr_sum - A[j]));
                return true;
            }
            s.add(A[j]);
        }
    }

    // If we reach here, then no triplet was found
    return false;
}


const arr = [1, 4, 45, 6, 10, 8];
const target = 22;

find3NumbersNaive(arr, target);
find3NumbersTwoSum(arr, target);
find3NumbersHash(arr, target);

