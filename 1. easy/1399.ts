function countLargestGroup(n: number): number {
  const groups = new Map<number, number>();
  const digitSum = new Array(n + 1).fill(0);
  let largest = 1;

  for (let i = 1; i <= n; i++) {
    digitSum[i] = digitSum[Math.floor(i / 10)] + (i % 10);
  }
  for (let i = 1; i <= n; i++) {
    let sum = digitSum[i];
    if (!groups.has(sum)) {
      groups.set(sum, 1);
    } else {
      let count = groups.get(sum);
      groups.set(sum, count + 1);
      largest = Math.max(largest, count + 1);
    }
  }

  let count = 0;

  for (let i = 1; i <= groups.size; i++) {
    if (groups.get(i) !== largest) continue;
    count++;
  }
  return count;
}
// O(n) time complexity, O(n) space complexity.
