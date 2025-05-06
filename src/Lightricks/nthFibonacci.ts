export {};

// 0   1   1   2   3   5   8   13   21
function nthFibonacci(n: number): number {
    let firstNumber = 0;
    let secondNumber = 1;
    let returnNumber = n === 0 ? firstNumber : secondNumber;
    for (let i = 2; i < n+1; i++) {
        returnNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = returnNumber;
    }

    return returnNumber;
}

console.log(nthFibonacci(0));
console.log(nthFibonacci(1));
console.log(nthFibonacci(2));
console.log(nthFibonacci(3));
console.log(nthFibonacci(4));
console.log(nthFibonacci(5));
console.log(nthFibonacci(6));
console.log(nthFibonacci(7));
console.log(nthFibonacci(8));
