function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let num = nums[mid];
    if (num === target) return mid;
    if (num < target) left = mid + 1;
    if (num > target) right = mid - 1;
  }
  return -1;
}
// O(log n) time complexity, O(1) space complexity.
