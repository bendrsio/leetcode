function jump(nums: number[]): number {
  let jumps: number[] = [0];
  if (nums.length < 2) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
      if (jumps[j] === undefined) {
        jumps[j] = jumps[i] + 1;
        continue;
      }
      jumps[j] = Math.min(jumps[j], jumps[i] + 1);
    }
  }
  return jumps[nums.length - 1];
}
// O(n^2) time complexity, O(n) space complexity
