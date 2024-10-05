//** ------------------- ASSIGMENT OPERATORS --------------------- */

//* = (ASSIGNMENT OPERATOR)
//* ==
//* ===
//* +=
//* -=
//* *=
//* /=
//* %=
//* **=

//**----------------------------------------- */

//* = ASSIGMENT OPERATOR

let a = 5;

//? WE ASSIGN A TO BE 5

//**----------------------------------------- */

//* == EQUAL OPERATOR ( IT CHECKS EQUALITY IF THE NUMBERS THESAME )

console.log(5 == "5");

//? OUTCOME = TRUE ( SYSTEM NOT CHECKING THE TYPES ONLY CHECKING INTEGERS)

console.log(5 == 4);

//? OUTCOME = FALSE (HERE SYSTEM CHECKING IF THE NUMBERS IS EQUAL OR NOT)

console.log(2 == 2);

//? OUTCOME = TRUR (SYSTEM CHECKS IF THE NUMBERS THE SAME OR NOT)

let aa = 15;
let bb = 16;
let cc = aa + bb;
console.log(cc === bb);

//**----------------------------------------- */

//* === CHECKING EQUALITY WITH TYPE AND ALSO VALUE

console.log(5 === 5);

//? OUTCOME = TRUE (CHECKING THE EQUALITY IF IT IS NUNMBER AND THOSE NUMBERS THE SAME "YES"

console.log(2 === "2");

//? OUTCOME = FALSE ( CHECKING THE EQUALITY IF IT IS THE SAME NUMBER "YES"
//?                  CHECKING THE TYPE ONE OF THEM NUMBER ANOTHER INTEGER USED WITHIN
//?                 DOUBLE QUOTES THAT ONE IS "STRING" )

console.log(5 === 6);

//? OUTCOME =  FALSE (CHECKING THE NUMBER EQUALITY IT NOT THE SAME ANSWER IF FALSE)

//**----------------------------------------- */

//* += ASSIGNED NUMBER CAN BE SUM WITH NEEDED NUMBER

let kilos = 5;
kilos = kilos + 2;
console.log(kilos);

//? THIS IS THE SAME AS BELOW BUT THIS ONE IS LONG WAY

let cars = 2;
cars += 2;
console.log(cars);

//? OUTCOME = CARS WE ASSIGNED FIRST 2 THAN +=2 WE ADDED 2 MORE RESULT 4

//**----------------------------------------- */

//* -= WE CAN DECREASE THE ASSIGNED NUMBER

let lolipops = 9;
lolipops -= 2;
console.log(lolipops);

//? OUTCOME = 7 WE DEDUCT FROM 9 TO 2

//**----------------------------------------- */

//* /=

let d = 9;
d /= 3;
console.log(d);

//? OUTCOME = 3 WE DEVIDE THE "D NUMBER" WITH 3

//**----------------------------------------- */

//* %= IT GIVES THE REMIND NUMBER WHEN WE DEVIDE ONE NUMBER BY ANOTHER ONE

let e = 15;
e %= 4;
console.log(e);

//? OUTCOME = 3 WE DEVIDED THE 15/4 LEFT 3

//**----------------------------------------- */

//* **= IT GIVES THE NUMBER SQUARE

let books = 6;
books **= 2;
console.log(books);

//? OUTCOME = 36 WITH THIS OPERATOR WE MULTIPLY 6X6 = 36
