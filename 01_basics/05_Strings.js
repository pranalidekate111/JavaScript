const name = "pranali"
const lastname = " dekate"
console.log(name + lastname); //this is out dated way to concatinate the strings.
console.log(`hello my name is ${name}, and my last name is ${lastname}`); //it is modern way to concatinate the string this method or way is called as string interpolation.

// second way to declare the string :--
const gameName = new String("pranali-pd-com") // if ou print this in console it return the o/p as key & value pair.
// console.log(gameName);
// console.log(gameName[0]); //it return the 0th index (p)
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(3)); // in 3rdindex n is present.
console.log(gameName.indexOf('a'));

//-=================================Slicing=========================================


// const newString = gameName.substring(0, 4) //in this we cant give the negative values. starting point 0 andending point 4(n-1)=4-1=3 so 1st3 n0. will be printed.
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)//in slice you can also give the negative values. 
// console.log(anotherString);

const newStringOne = "     pranali    "
console.log(newStringOne);
console.log(newStringOne.trim());// trim can remove the extra spaces.

// replace :-
// ===========================

const url = "https://pranali.com/pranali%20dekate"

console.log(url.replace('%20','-')); // this replace the %20 to '-' (dash)

const urls = "pranalidekate.com%456dekate" //another example of urls.
console.log(urls.replace('%456', '--'));

// for checking the word is present in the given url or not
console.log(urls.includes("pranali")); //if pranali is present in the given urls then it return true otherwise false.

console.log(gameName.split('-'));//it seprate the string on the base of seprator and return array.