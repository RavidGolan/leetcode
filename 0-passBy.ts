console.log("***** By Value *****\n");

// region boolean
console.log("boolean: ");
let bool1: boolean = true;
let bool2 = bool1;
bool1 = false;

console.log(bool1);
console.log(bool2);
console.log(" ");
//endregion boolean

// region string
console.log("string:");
let string1: string = "aaa";
let string2: string = string1;
string1 = "bbb";

console.log(string1);
console.log(string2);
console.log(" ");
//endregion string

// region number
console.log("number:");
let number1: number = 1;
let number2: number = number1;
number1 = 2;

console.log(number1);
console.log(number2);
console.log(" ");
//endregion number

// region pass native to function
console.log("passNative: ");
function passNative(num: Number) {
    num = 20;
}
let num = 10;
console.log(num);
passNative(num);
console.log(num);
// endregion pass native to function

console.log("***** By Reference *****\n");

// region object
console.log("object: ");
let obj1 = { val: 10 };
let obj2 = obj1;
obj1.val = 20;

console.log(obj1);
console.log(obj2);
console.log(" ");
//endregion object

// region array of numbers
console.log("array of numbers: ");
let array1:number[] = [1,2,3];
let array2:number[] = array1;
array1[0] = 4;

console.log(array1);
console.log(array2);
console.log(" ");
//endregion array of numbers

// region array of objects
console.log("array of objects: ");
let array21= [{val:1}, {val:2}];
let array22 = array21;
array21[0].val = 3;

console.log(array21);
console.log(array22);
console.log(" ");
//endregion array of objects

// region pass object to function
console.log("passObject: ");
function passObject(obj) {
    obj.val = 20;
}
let obj = {val:10};
console.log(obj);
passObject(obj);
console.log(obj);
// endregion pass native to function
