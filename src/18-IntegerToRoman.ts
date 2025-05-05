function convertNot49ToRoman(num: number): string {
    const converter = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    let numAsRoman = "";
    if (num >= 1000) {
        numAsRoman += converter[1000];
        num -= 1000;
    } else if (num >= 500) {
        numAsRoman += converter[500];
        num -= 500;
    } else if (num >= 100) {
        numAsRoman += converter[100];
        num -= 100;
    } else if (num >= 50) {
        numAsRoman += converter[50];
        num -= 50;
    } else if (num >= 10) {
        numAsRoman += converter[10];
        num -= 10;
    } else if (num >= 5) {
        numAsRoman += converter[5];
        num -= 5;
    } else if (num >= 1) {
        numAsRoman += converter[1];
        num -= 1;
    }

    if (num > 0) {
        numAsRoman += convertNot49ToRoman(num);
    }

    return numAsRoman;
}

function convert49ToRoman(num: number): string {
    const converter = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    let numAsRoman = "";

    if (num === 900) {
        numAsRoman += converter[100] + converter[1000];
    } else if (num === 400) {
        numAsRoman += converter[100] + converter[500];
    } else if (num === 90) {
        numAsRoman += converter[10] + converter[100];
    } else if (num === 40) {
        numAsRoman += converter[10] + converter[50];
    } else if (num === 9) {
        numAsRoman += converter[1] + converter[10];
    } else if (num === 4) {
        numAsRoman += converter[1] + converter[5];
    }

    return numAsRoman;
}

function intToRoman(num: number): string {
    let numAsRoman = "";
    const numAsString = num.toString();
    let currentNumber = Number.parseInt(numAsString[0]);
    if (numAsString.length > 1) {
        currentNumber *= 10 ** (numAsString.length - 1);
    }
    if (numAsString[0] !== '4' && numAsString[0] !== '9') {
        numAsRoman += convertNot49ToRoman(currentNumber);
    } else {
        numAsRoman += convert49ToRoman(currentNumber);
    }

    if (numAsString.substring(1) !== "") {
        numAsRoman += intToRoman(Number.parseInt(numAsString.substring(1)));
    }

    return numAsRoman;
};

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));

function intToRomanChatGPT(num: number): string {
    const romanMap: { value: number; symbol: string }[] = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];

    let result = '';
    for (const { value, symbol } of romanMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

console.log(intToRomanChatGPT(3749));
console.log(intToRomanChatGPT(58));
console.log(intToRomanChatGPT(1994));
