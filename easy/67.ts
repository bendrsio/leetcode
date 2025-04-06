function addBinary(a: string, b: string): string {
  let result: string[] = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0 || carry > 0) {
    let digit = 0;
    if (i >= 0) digit += Number(a[i]);
    if (j >= 0) digit += Number(b[j]);
    digit += carry;
    if (digit > 1) {
      digit = digit % 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result.push(digit ? "1" : "0");
    i--;
    j--;
  }
  return result.reverse().join("");
}
