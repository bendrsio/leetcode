/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let res = new ListNode(0);
  let work = res;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry > 0) {
    let num1 = l1 !== null ? l1.val : 0;
    let num2 = l2 !== null ? l2.val : 0;
    let sum = num1 + num2 + carry;
    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    work.val = sum;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
    if (l1 !== null || l2 !== null || carry !== 0) {
      work.next = new ListNode(0);
      work = work.next;
    }
  }
  return res;
}
