function numTilings(n: number): number {
  let mem = new Map<number, number>();
  mem.set(1, 1);
  mem.set(2, 2);
  mem.set(3, 5);
  function recurse(n: number): number {
    if (n < 1) return 0;
    if (mem.has(n)) return mem.get(n);
    mem.set(n, (2 * recurse(n - 1) + recurse(n - 3)) % (10 ** 9 + 7));
    return mem.get(n);
  }
  return recurse(n);
}
// O(n) time complexity, O(n) space complexity
