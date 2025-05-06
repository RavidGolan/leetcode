export {};

function removeDuplicates(nums: number[]): number {
    let k = 0;
    const numsWithoutDuplicates: number[] = [];
    if (nums.length > 0) {
        numsWithoutDuplicates.push(nums[0]);
        ++k;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            numsWithoutDuplicates.push(nums[i]);
            ++k;
        }
    }
    nums = numsWithoutDuplicates;
    console.log(numsWithoutDuplicates);
    console.log(nums);
    return k;
}

const nums = [0,0,1,1,1,2,2,3,3,4];
const k = removeDuplicates(nums);
console.log(k);
console.log(nums);



function removeDuplicates2(nums: number[]): number {
    let k = 0;
    if (nums.length > 0) {
        ++k;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k-1]) {
            ++k;
            nums[k-1] = nums[i];
        }
        if (k-1 !== i) {
            nums[i] = undefined;
        }
    }
    return k;
}

console.log("removeDuplicates2");
const nums2 = [0,0,1,1,1,2,2,3,3,4];
const k2 = removeDuplicates2(nums2);
console.log(k2);
console.log(nums2);
