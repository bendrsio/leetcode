function reverse(x: number): number {
  let rev = 0;
  while (x != 0) {
    const digit = x % 10;
    if (rev > (2 ** 31 - 1) / 10 || rev < -(2 ** 31) / 10) return 0;
    rev = rev * 10 + digit;
    x = Math.trunc(x / 10);
  }
  return rev;
}
