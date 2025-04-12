function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  let answer: number[] = [];
  let seenA = new Set<number>();
  let seenB = new Set<number>();
  let common = new Set<number>();
  for (let i = 0; i < A.length; i++) {
    seenA.add(A[i]);
    seenB.add(B[i]);
    if (seenA.has(B[i])) {
      common.add(B[i]);
    }
    if (seenB.has(A[i])) {
      common.add(A[i]);
    }
    answer.push(common.size);
  }
  return answer;
}
