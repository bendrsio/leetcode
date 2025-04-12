// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const result = new ListNode();
  let work = result;
  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      work.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      work.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    work = work.next;
  }
  work.next = list1 != null ? list1 : list2;
  return result.next;
}
// O(n + m) time complexity, O(1) space complexity
