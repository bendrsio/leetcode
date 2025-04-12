function isAnagram(s: string, t: string): boolean {
  let letters = new Map<string, number>();

  if (s.length !== t.length) return false;

  for (const char of s) {
    letters.set(char, (letters.get(char) || 0) + 1);
  }

  for (const char of t) {
    const count = letters.get(char);
    if (count === undefined) return false;
    if (count === 1) {
      letters.delete(char);
    } else {
      letters.set(char, count - 1);
    }
  }

  return true;
}
// O(n) time complexity, O(n) space complexity
