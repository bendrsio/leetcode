class FenwickTree {
  tree: number[];
  size: number;

  constructor(size: number) {
    this.size = size + 2;
    this.tree = new Array(this.size).fill(0);
  }
  update(index: number, delta: number) {
    index += 1;
    while (index < this.size) {
      this.tree[index] += delta;
      index += index & -index;
    }
  }
  query(index: number): number {
    index += 1;
    let result = 0;
    while (index > 0) {
      result += this.tree[index];
      index -= index & -index;
    }
    return result;
  }
  queryRange(l: number, r: number): number {
    return this.query(r) - this.query(l - 1);
  }
}

function goodTriplets(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  const pos2 = new Map<number, number>();
  for (let i = 0; i < n; i++) pos2.set(nums2[i], i);
  const pos = nums1.map((val) => pos2.get(val)!);

  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  const bitL = new FenwickTree(n);
  const bitR = new FenwickTree(n);

  for (let j = 0; j < n; j++) {
    left[j] = bitL.query(pos[j] - 1);
    bitL.update(pos[j], 1);
  }

  for (let j = n - 1; j >= 0; j--) {
    right[j] = bitR.queryRange(pos[j] + 1, n - 1);
    bitR.update(pos[j], 1);
  }

  let res = 0;
  for (let j = 0; j < n; j++) {
    res += left[j] * right[j];
  }

  return res;
}
// O(n log n) time complexity, O(n) space complexity
