/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] > nums1[j + 1]) {
        let temp = nums1[j];
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = temp;
      }
    }
  }
  console.log(nums1);
}

merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
