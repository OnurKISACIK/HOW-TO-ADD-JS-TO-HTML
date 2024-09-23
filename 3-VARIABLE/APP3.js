//* *****************VARIABLES*****************
//* - VAR
//* - LET
//* - CONST

//* - VAR NOT USING ES6 IT IS OLD FASHION
//* - LET & CONST NEW VARIABLES INTRODUCED IN ES6

//* VAR IT IS GLOBAL SCOPE
//* LET

//*EXAMPLE 1
//* WE CAN USE "LET" AND ASSIGN AS BELOW;
let a = 10;
console.log(a);
//? OUTCOME "10"

//**--------------------------------------- */

//*EXAMPLE 2

//! WE CANNOT ASSIGN THE "LET" TWO TIMES AS FOLLOW WE NEED TO CHANGE THE VARIABLE NAME !!!!

let b = 7;
//*let b = 12
console.log(b);
//? OUTCOME
//! ERROR MESSAGE 'b' has already been declared !!!

//**-------------------------------------- */

//*EXAMPLE 3

let g = 10;
g = 12;
console.log(g);
//?OUTCOME "12"

//!WE CAN CHANGE THE VARIABLE AMOUNT LIKE THIS WAY !!!

//**--------------------------------------- */
//*EXAMPLE 4

const j = 10;
//* j= 20
console.log(j);
//?OUTCOME

//! WE CANNOT TAKE THE AMOUNT IN CONSOLE CONST WITH DIFFERENT AMOUNT CAN NOT BE REDECLARED!!!!

//**---------------------------------------- */

//*EXAMPLE 5

let k = 5;
let l = 9;
console.log(k + l);
//?OUTCOME "14"
