// let score = "33"
// let score = null
// let score = undefined
let score = true


console.log(typeof score); // both are same.
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber); //sometimes it return NAN (Not a number), in case of null it return 0.

// the string is not converted into the number in that case it returns NAN(not a number).

//BASIC CONVERSION (Notes) :-

// 33 => is converted into 33.
// "33abc" => NAN.
// true => 1; false => 0.
// null => 0
// undefined => NAN

// let IsLoggedIn = 1
// let IsLoggedIn = "" // the empty string returns false.
// let IsLoggedIn = "Pranali" // it return true.
let IsLoggedIn = 0 // it return false means 0 is actually return false.

// NOTES:--
// 1 => true; 0 => false
// "" => false
// "pranali" => true


let booleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(booleanIsLoggedIn);

let someNumber = 33 // this number is converted into string.
let StringNumber = String(someNumber)
// console.log(StringNumber);
// console.log(typeof StringNumber);


// ***************************************OPERATIONS************************************************

let value = 3
let negativeValue = -value // it return -3

console.log(negativeValue)

// same as the upper code

let a = 9
let b = -a
console.log(b);

// Basic Operation:-
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

// Concatination of string :-

let str1 = "Hello"
let str2 = " Pranali"
let str3 = str1 + str2
console.log(str3);

console.log(1 + "2");
console.log("1" + 2); 
console.log("1" + 2 + 2); // if string is present at first then it treated all number as string // it return 122
console.log(1 + 2 + "2"); // if string ispresent at last then after addition it as is put as it is.// it return 32

console.log(true);
console.log(+ true); // it return 1
// console.log(true +); // it gives an error.
console.log(+""); // it return 0

let gameCounter = 100
gameCounter++ 
console.log(gameCounter);

// Postfix increment:-
let x = 3
const y = x++
console.log(x); 
console.log(y);

// Prefix increment:-
let x1 = 3
const y1 = ++x1
console.log(x1); 
console.log(y1);

