//*********************** DATA TYPES ***********************/

//* 1- String
//* 2- Number
//* 3- Boolean
//* 4- Null
//* 5- Undefined
//* 6- Object
//* 7- Function

//* 1- String = WRITTEN TEXTS ARE CALLED STRING AND
//* ALSO IF WE USE IT WITHIN DOUBLE QUOTATION MARK TYPE IS ALSO CHANGING AS STRING

//*-------------------------------------------------- */
//*EXAMPLE 1
let names = "David";
console.log(names);
console.log(typeof names);

//?OUTCOME: DAVID
//?OUTCOME: STRING

//*-------------------------------------------------- */
//*EXAMPLE 2

let cars = "5";
console.log(cars);
console.log(typeof cars);

//?OUTCOME: 5
//?OUTCOME: STRING

//! IF WE USE DOUBLE QUOTATION MARKS AND INSERTING INSIDE SOME NUMBERS TYPE WILL BE CONSIDERED AS STRING

//*-------------------------------------------------- */

//* 2- Number = IF IT IS NOT WITHIN DOUBLE QUOTATION MARKS IT IS NUMBER

//*EXAMPLE

let cards = 14;
console.log(cards);
console.log(typeof cards);

//?OUTCOME: 14
//?OUTCOME: NUMBER

//*EXAMPLE

let pencils = "17";
console.log(pencils);
console.log(typeof pencils);

//! IF IT IS USED WITHIN DOUBLE QUOTES TYPE IS ALWAYS STRING !!!

//*-------------------------------------------------- */

//* 3- BOOLEAN TRUE AND FALSE

//*EXAMPLE

console.log(5 > 2);

//?OUTCOME: TRUE

//*EXAMPLE

console.log(2 > 8);

//?OUTCOME: FALSE

//*EXAMPLE

let h = 5;
let m = 6;
let total = h + m;
console.log(total < 5);

//?OUTCOME: FALSE

//*-------------------------------------------------- */

//** 4 - NULL = EMPTY

//*EXAMPLE

let v = null;
console.log(v);

//?OUTCOME: NULL

//! IN ABOVE EXAMPLE WE ASSIGN THE "v" empty in the beginning!!!!

//*EXAMPLE

let x = null;
x = 6;
console.log(x);

//?OUTCOME: FIRST NULL THAN WE ASSIGNED WITH 6 THAN OUTCOME BECAME 6

//*-------------------------------------------------- */

//* 5- UNDEFINED = NOTHING ASSGINED

//*EXAMPLE

let f;
console.log(f);

//?OUTCOME: UNDEFINED

//*-------------------------------------------------- */

//* 6 - OBJECT = IF WE ASSIGN THE VALUES WITHIN CURLYBRAKETS THAN IT BECOME OBJECT

//*EXAMPLE

let human = {
  gender: "man",
  name: "Osman",
  age: 15
};
console.log(typeof human);

//?OUTCOME: OBJECT

//*-------------------------------------------------- */

//* 7- FUNCTION =

//*EXAMPLE

let func = function() {
  console.log(func);
};
func();

//?OUTCOME:

//*-------------------------------------------------- */

//* 8- ARRAY= IF WE ASSIGN THE VARIABLE WITHIN [] IT IS A ARRAY

//*EXAMPLE

let books = [1, 2, 3, 4];
console.log(typeof books);

//?OUTCOME:OBJECT
