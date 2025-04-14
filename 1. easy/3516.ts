function findClosest(x: number, y: number, z: number): number {
  let dist1 = Math.abs(x - z);
  let dist2 = Math.abs(y - z);
  if (dist1 === dist2) return 0;
  return dist1 < dist2 ? 1 : 2;
}
// O(1) time complexity, O(1) space complexity
