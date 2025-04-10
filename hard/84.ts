function largestRectangleArea(heights: number[]): number {
  const left: number[] = [];
  const leftstack: number[] = [];

  for (let i = 0; i < heights.length; i++) {
    while (
      leftstack.length > 0 &&
      heights[leftstack[leftstack.length - 1]] >= heights[i]
    ) {
      leftstack.pop();
    }
    left[i] = leftstack.length === 0 ? -1 : leftstack[leftstack.length - 1];
    leftstack.push(i);
  }

  const right: number[] = [];
  const rightstack: number[] = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    while (
      rightstack.length > 0 &&
      heights[rightstack[rightstack.length - 1]] >= heights[i]
    ) {
      rightstack.pop();
    }
    right[i] =
      rightstack.length === 0
        ? heights.length
        : rightstack[rightstack.length - 1];
    rightstack.push(i);
  }

  let largest = 0;
  for (const i in heights) {
    const area = (right[i]! - left[i]! - 1) * heights[i]!;
    largest = Math.max(area, largest);
  }
  return largest;
}
// O(n) time complexity, O(n) space complexity
