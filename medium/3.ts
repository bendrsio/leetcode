function lengthOfLongestSubstring(s: string): number {
  let seen = new Map<string, number>();
  let longest = 0;
  let left = 0;

  for (let i = 0; s[i] !== undefined; i++) {
    if (seen.has(s[i])) {
      left = Math.max(left, seen.get(s[i]) + 1);
    }
    seen.set(s[i], i);
    longest = Math.max(longest, i - left + 1);
  }

  return longest;
}
