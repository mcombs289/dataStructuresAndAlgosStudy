class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//list 1
const a = new Node(1);
const b = new Node(3);
const c = new Node(5);
const d = new Node(6);

a.next = b;
b.next = c;
c.next = d;

//list 2
const e = new Node(1);
const f = new Node(1);
const g = new Node(2);
const h = new Node(4);
const i = new Node(7);

e.next = f;
f.next = g;
g.next = h;
h.next = i;

const printLinkedListIteratively = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

const zigZag = (list1, list2) => {
  let dummy = new Node();
  let curr = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 !== null ? list1 : list2;

  return dummy.next;
};

printLinkedListIteratively(zigZag(a, e));
