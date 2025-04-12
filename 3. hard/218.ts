const INT_MAX = 2 ** 31 - 1;

function canMoveRight(buildings: number[][], x: number, y: number): number {
  let move = INT_MAX;
  for (let i = 0; i < buildings.length; i++) {
    if (buildings[i][1] <= x || buildings[i][2] < y) continue;
    if (buildings[i][1] === INT_MAX) INT_MAX;
    if (buildings[i][2] === y) move = Math.min(move, buildings[i][1] - x);
    if (buildings[i][2] > y) move = Math.min(move, buildings[i][0] - x);
  }
  if (move === INT_MAX) return 0;
  return move;
}

function canMoveUp(buildings: number[][], x: number, y: number): number {
  let move = 0;
  for (let i = 0; i < buildings.length; i++) {
    if (buildings[i][0] != x) continue;
    move = Math.max(move, buildings[i][2] - y);
  }
  return move;
}

function canMoveDown(buildings: number[][], x: number, y: number): number {
  let move = y;
  for (let i = 0; i < buildings.length; i++) {
    if (buildings[i][0] > x || buildings[i][1] <= x || buildings[i][2] > y)
      continue;
    move = Math.min(move, y - buildings[i][2]);
  }
  return move;
}

function getSkyline(buildings: number[][]): number[][] {
  let points: number[][] = [];
  let x = 0;
  let y = 0;
  let move = 0;
  let i = 0;
  while (true) {
    if (i++ > 100) break;
    let moved = false;
    move = canMoveRight(buildings, x, y);
    if (move > 0) {
      x += move;
      moved = true;
      points.push([x, y]);
      continue;
    }
    move = canMoveUp(buildings, x, y);
    if (move > 0) {
      y += move;
      points.push([x, y]);
      moved = true;
      continue;
    }
    move = canMoveDown(buildings, x, y);
    if (move > 0) {
      y -= move;
      points.push([x, y]);
      moved = true;
      continue;
    }
    if (!moved) break;
  }
  return points;
}

// O(n^2) time complexity, O(n) space complexity
// Currently breaks on extreme (INT_MAX...) tests. TODO: Fix this
