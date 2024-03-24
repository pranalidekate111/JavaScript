const score = 400; //here we not declare the type  or data type.
console.log(typeof (score));

const balance = new Number(100) // here we declare the type of the number as number.
console.log(balance);
console.log(balance.toString()); //now 100 is converted into the string.
console.log(balance.toString().length);


//===============================================================

let num = 100
console.log(num);//return 100

const balanace = new Number(200)
console.log(balanace); //it return 200 along with its data type(Number).

console.log(balanace.toString().length); //it return 200 but it is a string datatype,100 me 3 char hai isliye 3 return karega.
console.log(typeof "balanace"); //string.

console.log(balanace.toFixed(2)); // always take int and it add 2 zeros at the end.

const anotherNumber = 23.8966
console.log(anotherNumber.toPrecision(3)); // it return the pricise value (value koround of kr ke dega.)
//here 3 means ,it focus only on 3 numbers and return the round of result.

//toLocalString():=> used to easily read and count the number of zeros.
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // return 1,000,000 (by-default follow the us number system)

// reading zeros in indian numbers system then we use ('en-IN'):-
console.log(hundreds.toLocaleString('en-IN')); //return 10,00,000



// +++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++

//math is a inbuild library in java script.
// this library mostly used in math.random.

console.log(Math); // it return object.

//abs:->
console.log(Math.abs(-4)); // abs (absolute value) it convert the negative value to positive

//round:->
console.log(Math.round(5.3)); // return 5, it gives the round off values.

console.log(Math.round(5.6)); // return 6 (round off value.)

//ceil():- it choose the top values.
console.log(Math.ceil(4.3)); //return 5 (choosealways upper value.)

//floor() :-> always take the lowest value.
console.log(Math.floor(6.3)); // return 6 
console.log(Math.floor(6.9)); // return 6

//min() :-> to find minimum value in the given array
console.log(Math.min(2, 5, 3, 1, 0, 8)); //return 0 (minimum value.)

//max() :-> to find maximum value in the array.
console.log(Math.max(2, 5, 3, 1, 0, 8)); //return 8 (maximum value.)

//random():-> genrate the random numbers between 0-1
console.log(Math.random());


console.log(Math.random() * 10 + 1);

//genral formula of math.random:->

//math.random() * (max - min + 1) + min

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min));
