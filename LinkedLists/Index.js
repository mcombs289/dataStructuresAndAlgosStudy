class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

a.next = b;
b.next = c;
c.next = d;

const listValues = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

///Time complexity: O(n)
///Space complexity: O(1)
const findIndexIteratively = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) return current.val;
    current = current.next;
    count++;
  }
  return false;
};

///Time complexity: O(n)
///Space complexity: O(n) store every call on callstack
const findIndexRecursively = (head, index) => {
  let count = 0;
  return findIndex(head, index, count); //mutate values array
};

const findIndex = (head, index, count) => {
  if (head === null) return false;
  if (count === index) return head.val;
  count++;
  return findIndex(head.next, index, count);
};

const insertNode = (head, newNode, index) => {
  let count = 0;
  let current = head;
  let prev = null;
  console.log(listValues(head));
  while (current !== null) {
    if (count === index) {
      prev.next = newNode;
      newNode.next = current;
      return listValues(head);
    }
    prev = current;
    current = current.next;
    count++;
  }
  return false;
};

//console.log(findIndexRecursively(a, 3));
console.log(insertNode(a, e, 2));
console.log(insertNode(a, f, 7));
