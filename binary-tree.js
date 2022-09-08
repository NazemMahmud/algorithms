/* Init example
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(5);
const c = new Node(1);
const d = new Node(6);
const e = new Node(2);
const f = new Node(0);
const g = new Node(8);
const h = new Node(7);
const i = new Node(4);
// [3,5,1,6,2,0,8,null,null,7,4]
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;
e.right = i;*/

// JavaScript Program for Lowest Common
// Ancestor in a Binary Tree
// A O(n) solution to find LCA of
// two given values n1 and n2

/** *************** Solution 1: 2 way traversal O(n) & O(n) ************* *******************/
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.data = value;
    }
}

let root;
let path1 = [];
let path2 = [];

// Finds the path from root node to given root of the tree.
function findLCA(n1, n2) {
    path1 = [];
    path2 = [];
    return findLCAInternal(root, n1, n2);
}

function findLCAInternal(root, n1, n2) {

    if (!findPath(root, n1, path1, 'left') || !findPath(root, n2, path2, 'right')) {
        document.write((path1.length > 0) ?
            "n1 is present" : "n1 is missing");
        document.write((path2.length > 0) ?
            "n2 is present" : "n2 is missing");
        return -1;
    }

    let i;
    for (i = 0; i < path1.length && i < path2.length; i++) {

        // System.out.println(path1.get(i) + " " + path2.get(i));
        if (path1[i] != path2[i])
            break;
    }

    return path1[i - 1];
}

// Finds the path from root node to
// given root of the tree, Stores the
// path in a vector path[], returns true
// if path exists otherwise false
function findPath(root, n, path, side) {
    // base case
    if (root == null) {
        return false;
    }
    console.log('side: ', side, 'root: ', root, 'nn: ', n);
    // Store this node . The node will be removed if
    // not in path from root to n.
    path.push(root.data);
    console.log('side: ', side, 'path: ', path, 'nn: ', n);
    if (root.data == n) {
        return true;
    }

    if (root.left != null && findPath(root.left, n, path)) {
        return true;
    }

    if (root.right != null && findPath(root.right, n, path)) {
        return true;
    }

    // If not present in subtree rooted with root,
    // remove root from
    // path[] and return false
    path.pop();

    return false;
}

/** *************** Solution 1 Ends ************* *******************/

/** *************** Solution 2: Single Traversal ************* *******************/
function lowestCommonAncestor(root, p, q) {
    // normally if root == null, should return null
    // but here I will consider, if there is no other child node, then this particular can be a descendant of itself.
    if (!root || root.data === p || root.data === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    return !left ? right : (!right ? left : root);
}

const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("root = ", root);

// console.log("LCA(4, 5) = ", findLCA(4,5));
// console.log("LCA(4, 5) = ", findLCA(4,5));
// console.log("LCA(4, 6) = ", findLCA(4,6));
// console.log("LCA(3, 4) = ", findLCA(3,4));
// console.log("LCA(2, 4) = ", findLCA(2,4));

console.log("LCA(4, 5) = ", lowestCommonAncestor(root, 4, 5));
// console.log("LCA(4, 6) = ", lowestCommonAncestor(root, 4, 6));
// console.log("LCA(3, 4) = ", lowestCommonAncestor(root, 3, 4));
// console.log("LCA(2, 4) = ", lowestCommonAncestor(root, 2, 4));


