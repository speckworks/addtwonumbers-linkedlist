
  //Definition for singly-linked list.
 function ListNode(val, next) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
 }

const addTwoNumbers = (l1, l2) => {
  let carry = 0, sum = 0, head = new ListNode(0), now = head, a = l1, b = l2;

  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  return head.next;
};

addTwoNumbers([1,2,3], [8,9,1]);

//this returns Nan for val.. not sure why.  I tried to iterated with a simple for loop, didn't change anything. 