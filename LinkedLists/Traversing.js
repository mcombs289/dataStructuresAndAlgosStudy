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

a.next = b;
b.next = c;
c.next = d;

////   A -> B -> C -> D -> NULL     each node is a head of its own linked list B -> C -> D -> NULL, C -> D -> NULL, D -> NULL
///   curr           tail

//Iteratively time
const printLinkedListIteratively = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

////Recusrively
const printLinkedListRecursively = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedList(head.next);
};

///Time complexity: O(n)
///Space complexity: O(n) each call is stored on call stack
const findValueRecursively = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return findValueRecursively(head.next, target);
};

//printLinkedListRecursively(a);
console.log(findValueRecursively(a, "D"));
