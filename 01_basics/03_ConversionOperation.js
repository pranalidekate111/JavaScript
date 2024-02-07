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
console.log(StringNumber);
console.log(typeof StringNumber);
