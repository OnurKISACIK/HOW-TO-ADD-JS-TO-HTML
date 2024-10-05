//* ------------------------ CONDITIONAL STRUCTURES -----------------*/

//* let x= xx
//*   if()
//*   {
//*   console.log()
//*   }
//*   else{
//*   console.log()
//*   }

//**----------------------------------- */

let note = 65;
if (note > 55) {
  console.log("You Passed!", "Your Result:" + note);
} else {
  console.log("You Failled", " Your Result:" + note);
}

//? OUTCOME: HERE NOTE IS BIGGER THAN THE 55 THAN FIRST BLOCK WILL BE WORK
//? YOU PASSED! YOUR RESULT:65

//**------------------------------------ */

let notes = 35;
if (notes > 65) {
  console.log("You Passed! ,Your Note Is:" + notes);
} else {
  console.log("YOU FAILLED, YOUR NOTE IS NOT ENOUGH:" + notes);
}

//? OUTCOME: IF THE NOTES IS BIGGER THAN 65 YOU PASSED YOUR NOTES IS:XXX
//?          IF THE NOTES IS SMALLER THAN 65  YOU FAILLED, YOUR NOTE IS NOT ENOUGH

//**------------------------------------ */

let age = prompt("Your Age:");
console.log(typeof age);
if (age >= 18) {
  console.log("You Can Visit Our Web Page");
} else {
  console.log("You are not Adult!!!");
}

///! QUESTION: IF TAKE THE DATE FROM CUSTOMER WITH PROMPT HOW THE SYSYEM KNOWS THAT IT IS NUMBER AND
//!            WORKING WITH THIS NUMBER

//! QUESTION: SHOULD NOT BE THE CORRECT ONE let age = number(prompt("Your Age:")); WHEN I USED THIS WAY
//!           IT GAVE ME THIS ERROR MESSASGE APP10.js:38 Uncaught ReferenceError: number is not defined
//!           at APP10.js:38:11
//? WHEN I INSERT THE ENTRY WITH THIS WAY let age = Number(prompt("Your Age:"));  N is camel world than it worked
//? it must be exactly how it is mentioned as code?

//**------------------------------------ */

let firstNote = prompt("Your First Note:");
console.log(typeof firstNote);
let finals = prompt("Please insert your note:");
if (firstNote > 40 && finals >= 70) {
  console.log("YOU PASSED, CONGRANT");
} else {
  console.log("YOU FAILLED");
}
//*--------------------------------------- */

//* FIRSTEXAM %30 SECONEXAM %40 THIRDEXAM %40 FINAL %50

//* 80 70 75 86

let firstExam = prompt("Please insert your first exam note:");
let secondExam = prompt("Please insert your second exam note:");
let thirdExam = prompt("please insert your third exam note: ");
let finalExam = prompt("please insert your final exam note: ");

let avarage =
  firstExam * 0.3 + secondExam * 0.4 + thirdExam * 0.4 + finalExam * 0.5;

if (avarage >= 126) {
  console.log("Congratulations, You passed Final Score:" + typeof avarage);
} else {
  console.log("We Are Sorry You Failled, Final Score" + avarage);
}

//*--------------------------------------- */
let firstPizza = 0;
let secondPizza = 40;
let purchasedPizza = prompt("May I Take Your Order:");

let finalPizza = secondPizza - purchasedPizza;
if (finalPizza >= 1 && finalPizza <= 40) {
  console.log("Only" + finalPizza + "Pizza Left!!!");
} else {
  console.log("You Can Not Purchase More Than 40 Pizzas !!!");
}
