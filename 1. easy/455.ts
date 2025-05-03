function findContentChildren(g: number[], s: number[]): number {
  let happy = 0;
  let child = 0;
  let cookie = 0;
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) {
      happy++;
      child++;
      cookie++;
    } else cookie++;
  }

  return happy;
}
// O(n log n + m log m) time complexity, O(log n + log m) space complexity
