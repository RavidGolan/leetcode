function majorityElement(nums: number[]): number {
    let numsCounters= {};
    let biggestCounter: number = 0;
    let biggestCounterNum: number;

    for (const num of nums) {
        if (numsCounters[num]) {
            numsCounters[num]++;
        } else {
            numsCounters[num] = 1;
        }

        if (numsCounters[num] > biggestCounter) {
            biggestCounter = numsCounters[num];
            biggestCounterNum = num;
        }
    }

    return biggestCounterNum;
}

console.log(majorityElement([6,5,5]));
