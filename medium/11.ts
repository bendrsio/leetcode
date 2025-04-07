function maxArea(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  while (right > left) {
    let area = (right - left) * Math.min(height[left], height[right]);
    result = Math.max(result, area);
    if (height[right] > height[left]) left++;
    else right--;
  }

  return result;
}
// O(n) time complexity, O(1) space complexity
