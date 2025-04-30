function countDigits(num: number): number {
  let digits = 0;
  while (num > 0) {
    digits++;
    num = Math.floor(num / 10);
  }
  return digits;
}

function findNumbers(nums: number[]): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (countDigits(nums[i]) % 2 === 0) count++;
  }
  return count;
}
// O(n) time complexity, O(1) space complexity.
