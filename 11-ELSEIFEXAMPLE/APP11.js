// //* ------------------------ CONDITIONAL STRUCTURES -----------------*/
// //* IF WE HAVE MORE THAN ONE CONDITIONS
// //! ONLY ONE CODE IS WORKING WHICHEVER CONDITIONS MET
// //! WORKING IT START TO CHECK FROM THE FIRST CONDITIONS TO DOWN
// //* let x= xx

// //*   if(CONDITONS){
// //*   CODES(CONSOLE.LOG)
// //*   }
// //*   else if(CONDITIONS) {
// //*   CODES(CONSOLE.LOG)
// //*   }
// //*   else if(CONDITIONS) {
// //*   CODES(CONSOLE.LOG)
// //*   }
// //*   else{
// //*   CODES(CONSOLE.LOG);
// //*   }

// //**----------------------------------- */

// //* BODY MASS INDEX
// //* WEIGHT/HEIGHT*2

// let Weight = Number(prompt("Please insert your weight!"));
// let Height = Number(prompt("Please insert your height"));

// let Avarage = Weight / (Height / 100) ** 2;

// if (Avarage <= 18) {
//   console.log("Your BMI Below The Normal Weight:" + Avarage);
// } else if (Avarage >= 19 && Avarage <= 25) {
//   console.log("Your BMI is Normal:" + Avarage);
// } else if (Avarage >= 26 && Avarage <= 30) {
//   console.log("Your are Over Weight!!! :" + Avarage);
// } else if (Avarage >= 31 && Avarage < 35) {
//   console.log("Your Are Obese!!!");
// }

//**----------------------------------- */

//*               ---- GAS STATION  ----
//** benzin = 2.6
//** dizel = 1.9

//* buget = 500

let spaces = "\n";
const benzin = 2.6;
const dizel = 1.9;

const buget = 500;

let process1 = Number(
  prompt(
    "Please choose your option!" + spaces + "1-Benzin" + spaces + "2-Dizel"
  )
);
let process2 = Number(prompt("please insert needed liter"));

let total1 = benzin * process2;
let total2 = dizel * process2;

if (process1 == 1 && process2 > 0 && total1 < 500)
  console.log("Total Payment: " + total1);
else if (process1 == 2 && process2 > 0 && total2 < 500)
  console.log("Total Payment: " + total2);
else if (total1 > 500 && total2 > 500) {
  console.log("Not Enough Money!!");
}
// //**----------------------------------- */

// const carModels = prompt(" PLEASE INSERT YOUR CAR MODEL");
// const fuelType = prompt(" PLEASE INSERT YOUR FUEL TYPE");
// const litterAmount = prompt("PLEASE INSERT THE LITER AMOUNT");

// let totalFuel = 100;
// const fuelPrice = 2.5;

// let carsAvailable = ["BMW", "Toyota"];
// let fuelAvailable = ["BENZIN", "DIZEL"];

// if (carsAvailable.includes(carModels.toUpperCase())) {
//   console.log("car is avaialble");
//   if (fuelAvailable.includes(fuelType.toUpperCase())) {
//     console.log("fuel is avaialble");
//     if (litterAmount <= totalFuel) {
//       console.log(litterAmount, "litter amount");
//       console.log("Fuel Amount is avaialble");
//       totalFuel -= litterAmount;
//       console.log(totalFuel);
//       console.log(`TotalPrice: ${fuelPrice * litterAmount} BGN`);
//     } else {
//       console.log("Amount Not Available");
//     }
//   } else {
//     console.log("FUEL NOT AVAILABLE");
//   }
// } else {
//   console.log("Car NOt available");
// }

// const carModels2 = prompt(" PLEASE INSERT YOUR CAR MODEL");
// const fuelType2 = prompt(" PLEASE INSERT YOUR FUEL TYPE");
// const litterAmount2 = prompt("PLEASE INSERT THE LITER AMOUNT");

// if (carsAvailable.includes(carModels2.toUpperCase())) {
//   console.log("car is avaialble");
//   if (fuelAvailable.includes(fuelType2.toUpperCase())) {
//     console.log("fuel is avaialble");
//     if (litterAmount2 <= totalFuel) {
//       console.log(litterAmount2, "litter amount2");
//       console.log("Fuel Amount is avaialble");
//       totalFuel -= litterAmount2;
//       console.log(totalFuel);
//       console.log(`TotalPrice: ${fuelPrice * litterAmount2} BGN`);
//     } else {
//       console.log("Amount Not Available");
//     }
//   } else {
//     console.log("FUEL NOT AVAILABLE");
//   }
// } else {
//   console.log("Car NOt available");
// }
