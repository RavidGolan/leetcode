function lengthOfLastWord(s: string): number {
    let lengthLastWord = 0;
    for (let i=s.length -1; i>=0; i--) {
        if (s[i] !== ' ') {
            ++lengthLastWord;
        } else if (lengthLastWord > 0) {
            break;
        }
    }
    return lengthLastWord;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
