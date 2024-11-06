//* ------------------------ CONDITIONAL STRUCTURES -----------------*/
//* IF WE HAVE MORE THAN ONE CONDITIONS
//! ONLY ONE CODE IS WORKING WHICHEVER CONDITIONS MET
//! WORKING IT START TO CHECK FROM THE FIRST CONDITIONS TO DOWN
//* let x= xx

//*   if(CONDITONS){
//*   CODES(CONSOLE.LOG)
//*   }
//*   else if(CONDITIONS) {
//*   CODES(CONSOLE.LOG)
//*   }
//*   else if(CONDITIONS) {
//*   CODES(CONSOLE.LOG)
//*   }
//*   else{
//*   CODES(CONSOLE.LOG);
//*   }

//**----------------------------------- */

//* BODY MASS INDEX
//* WEIGHT/HEIGHT*2

let Weight = Number(prompt("Please insert your weight!"));
let Height = Number(prompt("Please insert your height"));

let Avarage = Weight / (Height / 100) ** 2;

if (Avarage <= 18) {
  console.log("Your BMI Below The Normal Weight:" + Avarage);
} else if (Avarage >= 19 && Avarage <= 25) {
  console.log("Your BMI is Normal:" + Avarage);
} else if (Avarage >= 26 && Avarage <= 30) {
  console.log("Your are Over Weight!!! :" + Avarage);
} else if (Avarage >= 31 && Avarage < 35) {
  console.log("Your Are Obese!!!");
}

//**----------------------------------- */

//*               ---- GAS STATION  ----
//** benzin = 2.6
//** dizel = 1.9

//* buget = 500

// let spaces = "\n";
// const benzin = 2.6;
// const dizel = 1.9;

// const buget = 500;

// let process1 = Number(
//   prompt(
//     "Please choose your option!" + spaces + "1-Benzin" + spaces + "2-Dizel"
//   )
// );
// let process2 = Number(prompt("please insert needed liter"));

// let total1 = benzin * process2;
// let total2 = dizel * process2;

// if (process1 == 1 && process2 > 0 && total1 < 500)
//   console.log("Total Payment: " + total1);
// else if (process1 == 2 && process2 > 0 && total2 < 500)
//   console.log("Total Payment: " + total2);
// else if (total1 > 500 && total2 > 500) {
//   console.log("Not Enough Money!!");
// }
// //**----------------------------------- */

//*GAS STATION 2 WITH TWO PAX

const gasoline = 2.65;
const dizel = 2.12;
const gas = 1.75;

const totalGasoline = 200;
const totalDizel = 200;
const totalGas = 200;

const space = "\n";

const fuel = prompt(
  "please insert your type of fuel" +
    space +
    "1- Gasoline" +
    space +
    "2- Dizel" +
    space +
    "3- Gas"
);

let litters = prompt("Please insert the need Fuel");

let total1 = totalGasoline - litters;
let total2 = totalDizel - litters;
let total3 = totalGas - litters;

if (fuel == "1" && totalGasoline <= 200 && total1 >= 0 && total1 <= 200) {
  console.log("Gasoline Puchased: " + litters + space + "Left: " + total1);
}
if (fuel == "2" && totalDizel <= 200 && total2 >= 0 && total2 <= 200) {
  console.log("Dizel Puchased: " + litters + space + "Left: " + total2);
}
if (fuel == "3" && totalGas <= 200 && total3 >= 0 && total3 <= 200) {
  console.log("Dizel Puchased: " + litters + space + "Left: " + total2);
} else {
  console.log = "max 200 litter";
}
