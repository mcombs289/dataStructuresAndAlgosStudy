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

//Before Reverse
///         head           tail
///   NUll -> A -> B -> C -> D -> NULL
///   prev  curr  next

//After Reverse
///          tail           head
///   NUll -> A -> B -> C -> D -> NULL
///                         prev  curr  next

///Time complexity: O(n)
///Space complexity: O(1)
const reverseIteratively = (head) => {
  let previous = null;
  let current = head;
  let next;
  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

console.log(reverseIteratively(a));
