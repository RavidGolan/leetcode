function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
};

function maxProfitWithDays(prices: number[]): number {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            console.log("buy day: %s, with price: %s", i-1, prices[i-1]);
            console.log("sell day: %s, with price: %s", i, prices[i]);
            console.log("profit: %s", prices[i] - prices[i - 1]);
            profit += prices[i] - prices[i - 1];
        }
    }

    console.log("total profit: %s", profit);
    return profit;
};

maxProfitWithDays([1,5,3,100]);

class C {
    [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name

