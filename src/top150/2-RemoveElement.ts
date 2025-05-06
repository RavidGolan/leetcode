export {};

function removeElement(nums: number[], val: number): number {
    let k: number = 0;
    let valIndex = 0;
    const nums2 = [...nums];
    for (let i = 0; i < nums2.length ; i++) {
        if (nums2[i] === val) {
            nums.splice(valIndex, 1);
        } else {
            ++k;
            ++valIndex;
        }
    }
    return k;
}

const nums = [0,1,2,2,3,0,4,2];
const k = removeElement(nums, 2);
console.log(k);
console.log(nums);



function removeElement2(nums: number[], val: number): number {
    let k: number = 0;
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            if (k !== i) {
                nums[i] = undefined;
            }
            ++k;
        } else {
            nums[i] = undefined;
        }
    }
    return k;
}

console.log("removeElement2");
const nums2 = [0,1,2,2,3,0,4,2];
const k2 = removeElement2(nums2, 2);
console.log(k2);
console.log(nums2);
