/**
 * Study links:
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/discuss/1207642/JS-Python-Java-C%2B%2B-or-Simple-O(1)-Space-and-Recursive-Solutions-w-Explanation
 * https://www.educative.io/answers/what-is-morris-traversal
 * https://www.youtube.com/watch?v=Hm4py7_yEtc
 */

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
}

var print = function (root) {
    // 1,2,3,4,5,6
    console.log(root.left);
    console.log(root.data);
    console.log(root.right.data);
    console.log(root.right.right.data);
    console.log(root.right.right.right.data);
    console.log(root.right.right.right.right.data);
    console.log(root.right.right.right.right.right.data);
}

/**
 * Insertion process:
 * 4 -> R [ 5 6 ] ---> 2 ->[L 3, R [4 R [5 6]]]
 * 3 -> R [4 R [5 6]] --> 2 ->[Null, [3 -> L , R [[4 R [5 6]]]]
 * @param root
 */
var morrisTraversal = function (root) {
    let next = root;
    while (next) {
        if (next.left) {
            let current = next.left;
            while (current.right) {
                current = current.right;
            }
            current.right = next.right;
            next.right = next.left;
            next.left = null;
        }
        next = next.right;
    }
}

/**
 * head.shift(6): 6
 * head.shift(5) : 5 6
 * head.shift(4) : 4 5 6
 * ...
 * 1 2 3 4 5 6
 * @param root
 */
var traverseFromBottom = function (root) {
    let head = null, curr = root
    while (head != root) {
        if (curr.right === head) {
            curr.right = null;
        }
        if (curr.left === head) {
            curr.left = null;
        }
        if (curr.right) {
            curr = curr.right;
        }
        else if (curr.left) {
            curr = curr.left;
        }
        else {
            curr.right = head; head = curr;
            curr = root;
        }
    }

}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);


// console.log(root);
console.log("next: ");
traverseFromBottom(root);

var startTime = performance.now();
morrisTraversal(root);
console.log( performance.now() - startTime );
print(root);

