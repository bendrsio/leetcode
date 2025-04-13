function modMul(a: number, b: number, mod: number): number {
  let result = 0;
  a %= mod;
  while (b > 0) {
    if (b % 2 === 1) {
      result = (result + a) % mod;
    }
    a = (a + a) % mod;
    b = Math.floor(b / 2);
  }
  return result;
}

function modPow(base: number, exponent: number, mod: number): number {
  let result = 1;
  base = base % mod;
  while (exponent > 0) {
    if (exponent % 2 === 1) {
      result = modMul(result, base, mod);
    }
    base = modMul(base, base, mod);
    exponent = Math.floor(exponent / 2);
  }
  return result;
}

function countGoodNumbers(n: number): number {
  const mod = 10 ** 9 + 7;
  const evens = Math.floor((n + 1) / 2);
  const odds = Math.floor(n / 2);
  return modMul(modPow(5, evens, mod), modPow(4, odds, mod), mod);
}
// O(log n) time complexity, O(1) space complexity
