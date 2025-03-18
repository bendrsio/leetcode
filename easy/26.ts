function removeDuplicates(nums: number[]): number {
  let seen = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (!seen.has(nums[i])) {
      nums[seen.size] = nums[i];
      seen.add(nums[i]);
    }
  }
  return seen.size;
}
