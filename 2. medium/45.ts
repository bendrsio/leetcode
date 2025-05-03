function jump(nums: number[]): number {
  const n = nums.length;
  if (n < 2) return 0;

  let jumps = 0;
  let end = 0;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === end) {
      jumps++;
      end = farthest;
      if (end >= n - 1) break;
    }
  }
  return jumps;
}
// O(n) time complexity, O(1) space complexity
