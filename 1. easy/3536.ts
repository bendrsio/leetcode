function maxProduct(n: number): number {
  let digits = n
    .toString()
    .split("")
    .map((d) => parseInt(d, 10));
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] > d1) {
      d2 = d1;
      d1 = digits[i];
    } else if (digits[i] > d2) {
      d2 = digits[i];
    }
  }
  return d1 * d2;
}
// O(n) time complexity, O(1) space complexity
