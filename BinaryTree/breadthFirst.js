//BREADTH FIRST TRAVERSAL
/// check each level
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// this tree
//       a
//      / \
//     b   c
//   /  \    \
// d     e    f

//output should be [a,b,c,d,e,f] as a in BF stack

//Iterative
//Time complexity: O(n) - add and remove every node to queue once
//Time complexity: O(n) - only storing queue which is n elements
const breadthFirst = (root) => {
  if (!root) return [];

  let values = [];
  let queue = [root]; //stack

  while (queue.length > 0) {
    // check if queue is empty
    let current = queue.shift();
    values.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return values;
};

const breadthFirstFind = (root, target) => {
  if (!root) return [];
  let queue = [root]; //stack

  while (queue.length > 0) {
    // check if queue is empty
    let current = queue.shift();
    if (current.val === target) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

//console.log(breadthFirst(a));
console.log(breadthFirstFind(a, "x"));
