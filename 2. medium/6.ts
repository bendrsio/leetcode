function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let reverse = 1;
  let row = 0;

  const lines: string[] = Array(numRows).fill("");
  for (const char of s) {
    lines[row] += char;
    row += reverse;
    if (row === numRows - 1) reverse = -1;
    if (row === 0) reverse = 1;
  }
  return lines.join("");
}
