// alert("hello world");

console.log("Hello World");
console.log(123);
console.log(true);
let greeting = "hello";
console.log(greeting);
console.log([1,2,3,4])
let objTest = {
    a:1,
    b:2,
};
console.log(objTest);

//console logging a table//
console.table(objTest);

//errors & warnings
console.error("This is some error");
console.warn("this is a warning");

// how to clear the console
console.clear();



//timer - lets you know how much time it takes to run a specific about of code//
console.time("hello");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.timeEnd("hello");


var name = "John Doe";
console.log('original name: ', name);

name = "steve smith";
console.log("updated name: ",name)

//init var
// var greeting;
console.log(greeting);
greeting = "hello";
console.log(greeting);

// multi word vars
let firstName = "John"; //camel case
let first_name = "Sara"; //underscore
let FirstName = "Tom"; // Pascal case - use with objects constructors, ES6 classes

//let is similar to var

let name = "John Doe";
console.log('original name: ', name);
name = "steve smith";
console.log("updated name: ",name)

// const - can't change or be reassigned, lets anyone looking at your code know that this variable SHOULD NOT be changed.

const name = "John";
console.log(name);
name = "sara";
//have to assign a value
const greeting; //can't do that//

//Const - can do//

//example 1//
const person = {
    name: "Sara",
    age: 30,
}

person.name = "Sara";
person.age = 32;

console.log(person);

//example 2//
const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);




//Primitive data type//

const name = "John Doe";
console.log(typeof name);

const age = 45;
console.log(typeof age);

const hasKids = true;
console.log(typeof hasKids);

const car = null;
console.log(typeof car);

let test; 
console.log(typeof test);

const sym = Symbol();
console.log(typeof sym);

//Reference Types - objects//

//array//
const hobbies = ['movies', 'music'];

//object literal//
const address = {
    city: 'Boston',
    state: "MA",

}
//dates
const today = new Date();
console.log(today);
console.log(typeof today);


// type conversions

let val;

//number to string

val =String(555);
val = String(4+4);

//boolean to string
val = String(true);

//date to string
val = String(new Date());

//array to sting
val = String([1,2,3,4]);

//toString method

val = (5).toString();
val = (true).toString();

//strings to numbers
val = Number("5");
val = Number(true); //will default to fixed value as 1//
val = Number(false);
val = Number(null);
val = Number("hell0");

val = parseInt("100.30"); //will parse it as an integer
val = parseFloat("100.30"); // will parse decimal places

//output
console.log(val);
console.log(typeof val);
// console.log(val.length); //length only works on strings
console.log(val.toFixed()); //toFixed = to specify decimals

const val1= '5';
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
