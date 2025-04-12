class MinStack {
  values: number[] = [];
  lowest: number[] = [];
  constructor() {}

  push(val: number): void {
    if (this.lowest.length === 0) this.lowest.push(val);
    else this.lowest.push(Math.min(this.lowest[this.lowest.length - 1], val));
    this.values.push(val);
  }

  pop(): void {
    this.values.pop();
    this.lowest.pop();
  }

  top(): number {
    return this.values[this.values.length - 1];
  }

  getMin(): number {
    return this.lowest[this.lowest.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// O(1) time complexity, O(n) space complexity
