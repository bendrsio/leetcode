function myAtoi(s: string): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  let i = 0;
  let result = 0;
  let sign = 1;
  while (s[i] === " ") i++;
  if (s[i] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") i++;
  while (i < s.length) {
    if (s[i] < "0" || s[i] > "9") return result * sign;
    const digit = Number(s[i]);
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > (sign === 1 ? 7 : 8))
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + digit;
    i++;
  }
  return result * sign;
}
