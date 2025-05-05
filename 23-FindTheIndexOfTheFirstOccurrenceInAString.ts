// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

function strStr(haystack: string, needle: string): number {
    let needleIndex = 0;
    let haystackIndex = 0;
    let secondMatchIndex = -1;

    while (haystackIndex < haystack.length) {
        if (needleIndex !== 0 && haystack[haystackIndex] === needle[0]) {
            if (secondMatchIndex === -1) {
                secondMatchIndex = haystackIndex;
            }
        }

        if (haystack[haystackIndex] === needle[needleIndex]) {
            if (needleIndex === needle.length-1) {
                break;
            }
            ++needleIndex;
        } else {
            needleIndex = 0;
            if (secondMatchIndex !== -1) {
                haystackIndex = secondMatchIndex - 1;
                secondMatchIndex = -1;
            }
        }
        ++haystackIndex;
    }

    if (haystackIndex === haystack.length) {
        return -1;
    } else {
        return haystackIndex-needle.length+1;
    }
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("mississippi", "issipi"));
