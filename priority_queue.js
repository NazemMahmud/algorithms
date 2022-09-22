// Function to shift up the node in order
// to maintain the heap property
function shiftUp( lastIndex)
{
    // return the index of the parent node of a given node
     let parentIndex = parseInt((lastIndex - 1) / 2)

    while (lastIndex > 0 && arr[parentIndex] < arr[lastIndex]) {
        // parentIndex = parseInt((i - 1) / 2)
        // Swap parent and current node
        [arr[lastIndex],  arr[parentIndex]] = [ arr[parentIndex],  arr[lastIndex]]
        // swap(parentIndex, i);

        // Update i to parent of i
        lastIndex = parentIndex;
        parentIndex = parseInt((lastIndex - 1) / 2)
    }
}

// Function to insert a new element
// in the Binary Heap
function insert( p)
{
    arr.push(p)
    // Shift Up to maintain heap property
    shiftUp(arr.length - 1);
}

const arr = []
const nums = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31]

// insert(3)
// insert(4)
// insert(9)
// insert(5)
// insert(2)
//  44, 42, 35, 33, 31, 19, 27, 10, 26, 14
nums.forEach(num => {
    insert(num)
})
console.log(arr);
