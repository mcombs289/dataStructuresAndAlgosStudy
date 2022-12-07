class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(1);
const b = new Node(5);
const c = new Node(3);
const d = new Node(6);

a.next = b;
b.next = c;
c.next = d;

///Time Complexity: O(n)
///Space complexity: O(1)
const addValuesIteratively = (head) => {
  let sum = 0;
  let current = head;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }

  return sum;
};

///Time Complexity: O(n)
///Space complexity: O(n) because of the call stack
const addValuesRecursively = (head) => {
  if (head === null) return 0;
  return head.val + addValuesRecursively(head.next);
};

console.log(addValuesRecursively(a));
