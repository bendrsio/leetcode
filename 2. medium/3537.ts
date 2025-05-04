function buildQuadrant(N: number): number[][] {
  if (N == 0) return [[0]];

  const size = Math.pow(2, N);
  const half = size / 2;
  const quadrant = buildQuadrant(N - 1);
  const grid: number[][] = [];

  for (let i = 0; i < size; i++) {
    grid.push(new Array(size).fill(0));
  }
  for (let i = 0; i < half; i++) {
    for (let j = 0; j < half; j++) {
      const value = quadrant[i][j];
      grid[i][j + half] = value;
      grid[i + half][j + half] = value + half * half;
      grid[i + half][j] = value + 2 * (half * half);
      grid[i][j] = value + 3 * (half * half);
    }
  }
  return grid;
}
function specialGrid(N: number): number[][] {
  return buildQuadrant(N);
}
// O(n^2) time complexity, O(n^2) space complexity
