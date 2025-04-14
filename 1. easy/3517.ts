function smallestPalindrome(s: string): string {
  if (s.length === 1) return s;

  let half = s
    .slice(0, s.length / 2)
    .split("")
    .sort();
  let middle = "";

  if (s.length % 2 === 1) middle = s[Math.floor(s.length / 2)];
  return half.join("") + middle + half.reverse().join("");
}
