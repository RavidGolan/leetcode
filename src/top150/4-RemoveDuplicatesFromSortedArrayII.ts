export {};

function removeDuplicates(nums: number[]): number {
    let k = 0;
    let numberOfDuplicates = 0;
    if (nums.length > 0) {
        ++k;
        ++numberOfDuplicates;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k-1]) {
            numberOfDuplicates = 1;
            ++k;
            nums[k-1] = nums[i];
        } else if (numberOfDuplicates < 2) {
            ++k;
            nums[k-1] = nums[i];
            ++numberOfDuplicates;
        }
    }
    return k;
}

console.log("removeDuplicates");
const nums = [1,1,1,2,2,3];
const k = removeDuplicates(nums);
console.log(k);
console.log(nums);


function removeDuplicates2(nums: number[]): number {
    let k = 0;
    let numberOfDuplicates = 0;
    if (nums.length > 0) {
        ++k;
        ++numberOfDuplicates;
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k-1] || numberOfDuplicates < 2) {
            if (nums[i] !== nums[k-1]) {
                numberOfDuplicates = 1;
            } else {
                ++numberOfDuplicates;
            }

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
const nums2 = [1,1,1,2,2,3];
const k2 = removeDuplicates2(nums2);
console.log(k2);
console.log(nums2);
