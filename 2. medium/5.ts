function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  let longest = 0;
  let pal = "";

  function expandFromCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    let len = right - left - 1;
    if (len > longest) {
      longest = len;
      pal = s.slice(left + 1, right);
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandFromCenter(i, i);
    expandFromCenter(i, i + 1);
  }

  return pal;
}
