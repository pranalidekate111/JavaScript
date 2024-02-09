//   js has two types :-
//       1) Primitive:-it allocte the copy not the actual value
//                          7 types:- String,number,symbol (to make values unique),null,booelean,BigInt,
//                             undefined(wedefine memory and space but notdefined any values)
                            
const score = 100 //number
const scorevalue = 100.8 // number
const isLoggedIn = false //boolean
const outsideTemp = null  // null    
let userEmail; //undefined

const BigNumber = 12368394749871394096814709n //BigInt :- always write n at the end it represent the BigInt.

const id = Symbol("123") //symbol
const anotherId = Symbol("123")  //symbol.

console.log(id === anotherId);


//       2) Non-Primitive (Reference):- it allowcate directly reference

//                 types:- Array [], objects{}:-key value pairs, functions


const heros = ["shakiman", "doga", "hatim", "power-rangers"]; // Array.

const myObj = {   // inside { } this brases that are the objects, variable type could be anything it can be int,string,etc.
    names : "pranali",
    age : 22,
}

//Functions :-

const MyFunction = function () {
    console.log("Hello World")
}

console.log(typeof anotherId)
console.log(typeof outsideTemp) // IMP:- null always return the object 

                
// JS is dynamically typed language ?

// yes, JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.