function maxProfit(prices: number[]): number {
  let lowest = Number.MAX_VALUE;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    lowest = Math.min(lowest, prices[i]);
    profit = Math.max(profit, prices[i] - lowest);
  }
  return profit;
}
// O(n) time complexity, O(1) space complexity
