// prices = [7,1,5,3,6,4]
// prices = [7,2,8,3,6,1,4]

function maxProfit(prices: number[]): number {
    let buyPrice = prices[0];
    let profit: number = 0;
    for (let i = 0; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        profit = Math.max(profit, prices[i] - buyPrice);
    }
    return profit;
};
console.log("maxProfit: " + maxProfit([7,2,8,3,6,1,4]));

function maxProfitWithDays(prices: number[]): number {
    let buyPrice = prices[0];
    let buyDayIndex = 0;
    let newBuyDayIndex = 0;
    let sellDayIndex = 0;
    let profit: number = 0;
    for (let i = 0; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
            newBuyDayIndex = i;
        }

        if (prices[i] - buyPrice > profit) {
            profit = prices[i] - buyPrice;
            buyDayIndex = newBuyDayIndex;
            sellDayIndex = i;
        }
    }
    console.log("Buy Day: " + (buyDayIndex + 1));
    console.log("Sell Day: " + (sellDayIndex + 1));
    console.log("Profit: " + profit);
    return profit;
};
maxProfitWithDays([7,2,8,3,6,1,4]);

function maxProfit0(prices: number[]): number {
    let profit: number = 0;
    for (let buyIndex = 0; buyIndex < prices.length; buyIndex++) {
        for (let sellIndex = buyIndex; sellIndex < prices.length; sellIndex++) {
            if (prices[sellIndex] - prices[buyIndex] > profit) {
                profit  = prices[sellIndex] - prices[buyIndex];
            }
        }
    }
    return profit;
};
