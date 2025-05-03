function canJump(nums: number[]): boolean {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return true;
}
// O(n) time complexity, O(1) space complexity
