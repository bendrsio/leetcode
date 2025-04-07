function longestConsecutive(nums: number[]): number {
  const list = new Set<number>(nums);
  let longest = 0;
  for (const num of list) {
    if (list.has(num - 1)) continue;
    let count = 1;
    while (list.has(num + count)) {
      count++;
    }
    longest = Math.max(longest, count);
  }
  return longest;
}

// O(n) time complexity, O(n) space complexity
