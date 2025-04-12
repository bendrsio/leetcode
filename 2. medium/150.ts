function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const num2 = stack.pop()!;
      const num1 = stack.pop()!;
      let result: number;
      switch (token) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = Math.trunc(num1 / num2);
          break;
      }
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop()!;
}

// O(n) time complexity, O(n) space complexity
