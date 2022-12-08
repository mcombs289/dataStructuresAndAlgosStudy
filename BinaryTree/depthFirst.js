//DEPTH FIRST TRAVERSAL
// check left most path
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

//output should be [a,b,d,e,c,f] as a stack

//check if stack is empty
//push right child then left so you hit left first
//check if stack is empty if its not pop off the top and push its children
//check if has children if it does then add them to the stack

//Iterative
//Time complexity: O(n) - add and remove every node to stack once
//Time complexity: O(n) - only storing stack which is n elements
const depthFirstIterative = (root) => {
  if (!root) return [];

  let values = [];
  let stack = [root]; //stack

  while (stack.length > 0) {
    let current = stack.pop();
    values.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return values;
};

//Recursive
//Time complexity: O(n) - add and remove every node to stack once
//Time complexity: O(n) - only storing stack which is n elements
const depthFirstRecursive = (root) => {
  if (!root) return [];
  let leftValues = depthFirstRecursive(root.left);
  let rightValues = depthFirstRecursive(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

// console.log(depthFirstIterative([]));
console.log(depthFirstRecursive(a));
