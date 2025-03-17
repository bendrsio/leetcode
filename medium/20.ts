function isValid(s: string): boolean {
  let items: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      items.push(s[i]);
      continue;
    }
    let top = items[items.length - 1];
    if (
      (s[i] === ")" && top === "(") ||
      (s[i] === "]" && top === "[") ||
      (s[i] === "}" && top === "{")
    ) {
      items.pop();
    } else {
      return false;
    }
  }
  if (items.length > 0) return false;
  return true;
}
