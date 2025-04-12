function reverseList(head: ListNode | null): ListNode | null {
  let back: ListNode | null = null;
  let work = head;
  while (work != null) {
    const next = work.next;
    work.next = back;
    back = work;
    work = next;
  }
  return back;
}
// O(n) time complexity, O(1) space complexity
