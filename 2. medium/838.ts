function pushDominoes(dominoes: string): string {
  let n = dominoes.length;
  let force: number[] = new Array(n).fill(0);
  let result: string[] = [];
  let strength = 0;

  for (let i = 0; i < n; i++) {
    if (dominoes[i] === "R") strength = n;
    if (dominoes[i] === "L") strength = 0;
    if (dominoes[i] === ".") strength = Math.max(strength - 1, 0);
    force[i] += strength;
  }
  for (let i = n - 1; i >= 0; i--) {
    if (dominoes[i] === "L") strength = -n;
    if (dominoes[i] === "R") strength = 0;
    if (dominoes[i] === ".") strength = Math.min(strength + 1, 0);
    force[i] += strength;
  }
  for (let i = 0; i < n; i++) {
    if (force[i] === 0) result[i] = ".";
    else result[i] = force[i] > 0 ? "R" : "L";
  }
  return result.join("");
}
// O(n) time complexity, O(n) space complexity
