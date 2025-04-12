function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  if (!head) return false;
  for (let i = 0; i <= 10 ** 5; i++) {
    if (fast!.next === null) return false;
    fast = fast!.next;
    if (i % 2 === 1) slow = slow!.next;
    if (fast === slow) return true;
  }
  return false;
}
// O(n) time complexity, O(1) space complexity
