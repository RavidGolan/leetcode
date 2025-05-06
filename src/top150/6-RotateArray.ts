export {};

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    for (let i = 0; i < k; i++) {
        for (let j = nums.length - 1; j > 0; j--) {
            const temp = nums[j-1];
            nums[j-1] = nums[j];
            nums[j] = temp;
        }
    }
}

const nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.log("rotate");
console.log(nums);



/**
 Do not return anything, modify nums in-place instead.
 */
function rotate2(nums: number[], k: number): void {
    const nums2 = [...nums];
    if (k > nums.length) {
        k = k - (nums.length * Math.floor(k/nums.length));
    }
    if (k < nums.length) {
        for (let j = 0; j < k; j++) {
            nums[j] = nums2[nums.length + j - k];
        }
        for (let i = 0; i < nums.length - k; i++) {
            nums[i + k] = nums2[i];
        }
    }
}
const nums2 = [-1,2];
rotate2(nums2, 3);
console.log("rotate2");
console.log(nums2);



function reverse(nums: number[], start: number, end: number) {
    while(start < end){
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
function rotate3(nums: number[], k: number): void {
    k %= nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
}

const nums3 = [1,2,3,4,5,6,7];
rotate3(nums3, 3);
console.log("rotate3");
console.log(nums3);

