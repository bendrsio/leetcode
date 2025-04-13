function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;

  do {
    if (!fast || !fast.next) return null;
    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);

  slow = head;

  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}
// O(n) time complexity, O(1) space complexity
