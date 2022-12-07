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

///Time complexity: O(n)
///Space complexity: O(n)
//write functions only about current node
const linkedListValuesIteratively = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  console.log(values);
};

const linkedListValuesRecursively = (head) => {
  const values = [];
  fillValues(head, values); //mutate values array
  return values;
};

const fillValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillValues(head.next, values);
};

console.log(linkedListValuesRecursively(a));
