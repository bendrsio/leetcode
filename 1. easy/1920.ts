function buildArray(nums: number[]): number[] {
  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}
// O(n) time complexity, O(n) space complexity.
