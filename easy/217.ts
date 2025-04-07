function containsDuplicate(nums: number[]): boolean {
  let seen = new Set<number>();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}
// O(n) time complexity, O(n) space complexity
