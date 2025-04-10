function largestRectangleArea(heights: number[]): number {
  const left: number[] = [];
  const stackL: number[] = [];
  const right: number[] = [];
  const stackR: number[] = [];

  for (let i = 0; i < heights.length; i++) {
    // left
    while (
      stackL.length > 0 &&
      heights[stackL[stackL.length - 1]] >= heights[i]
    ) {
      stackL.pop();
    }
    left[i] = stackL.length === 0 ? -1 : stackL[stackL.length - 1];
    stackL.push(i);
    // right
    while (
      stackR.length > 0 &&
      heights[stackR[stackR.length - 1]] >= heights[heights.length - 1 - i]
    ) {
      stackR.pop();
    }
    right[heights.length - 1 - i] =
      stackR.length === 0 ? heights.length : stackR[stackR.length - 1];
    stackR.push(heights.length - 1 - i);
  }
  //area
  let largest = 0;
  for (let i = 0; i < heights.length; i++) {
    const area = (right[i] - left[i] - 1) * heights[i];
    largest = Math.max(area, largest);
  }
  return largest;
}
// O(n) time complexity, O(n) space complexity
