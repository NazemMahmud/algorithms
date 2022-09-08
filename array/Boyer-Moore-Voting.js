/**
 * BOYER MOORE MAJORITY VOTE ALGORITHM: One of the most often used optimum algorithms
 * to determine the majority element among elements with more than N/2 occurrences. (N is the size of array)
 * Such as, here [2,2,1,1,5,2,1,2] occurrences of 2 is the most, but the occurrences is 4, which is not greater than 8/2
 * But, here, [2,2,1,2,5,2,1,2], occurrences of 2 is 5, which is not greater than 8/2
 *
 * Normally, to find out the majority occurrences of any element in array, we may use bruteforce (takes more time), hashmap(takes more space)
 * This algorithm works in linear time O(N) time, and no extra space  O(1) space complexity
 */

 /**
 * @param nums
 * @returns {null|number}
 */
var findMajority = (nums) => {
   let count = 0, candidate = null;

    // Finding majority candidate; use loop instead if for..of, because that is faster
     for (let i=0; i<nums.length; i++) {
         if (count == 0) {
             candidate = nums[i];
         }
         count = (nums[i] == candidate) ? count + 1 : count - 1;
     }

    // Checking if majority candidate occurs more than n/2 times
    count = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] == candidate)
            count++;
    }
    if (count > Math.floor(nums.length / 2))
        return candidate;
    return -1;


}


console.log('result 0: ', findMajority([ 1, 1, 1, 1, 2, 3, 4 ])); // 1
console.log('result 1: ', findMajority([2,2,1,1,5,2,1,2])); // -1 no occurances, coz !greater N/2
console.log('result 2: ', findMajority([2,2,1,2,5,2,1,2])); // 2
