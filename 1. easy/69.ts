function mySqrt(x: number): number {
  let low = 0;
  let high = x;
  let result = 0;
  while (low <= high) {
    let guess = Math.floor((low + high) / 2);
    let square = guess * guess;
    if (square === x) return guess;
    if (square < x) {
      low = guess + 1;
      result = guess;
    }
    if (square > x) high = guess - 1;
  }
  return result;
}
// O(log n) time complexity, O(1) space complexity.
