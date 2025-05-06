export {};

function longestCommonPrefix(strs: string[]): string {
    let longestCommonPrefix: string = "";
    if (strs.length > 0) {
        const firstWord: string = strs[0];
        if (strs.length > 1) {
            for (let i = 0; i < firstWord.length; i++) {
                let theSame: boolean = true;
                for (let j = 1; j < strs.length; j++) {
                    if (strs[j][i] !== firstWord[i]) {
                        theSame = false;
                    }
                }
                if (theSame) {
                    longestCommonPrefix += firstWord[i];
                } else {
                    break;
                }
            }
        }
        else {
            longestCommonPrefix = firstWord;
        }
    }

    return longestCommonPrefix;
}

function longestCommonPrefix2(strs: string[]): string {
    let ans = strs[0];

    for( let i = 1; i< strs.length; i++){
        while(!strs[i].startsWith(ans)) {
            ans = ans.slice(0,-1);
        }
        if (ans === ''){
            return ans;
        }
    }
    return ans;
}
