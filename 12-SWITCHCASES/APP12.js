//**----------------- SWITCH CASES ------------------- */

//* switch(value){
//*            }
//* case1:
//* CODES
//* break;

//* case2:
//* CODES
//* break;

//* case3:
//* CODES
//* break;

//* defult:
//* CODES
//* break;

//**------------------------------------ */

//* IT IS ALTERNATIVES IF ELSE
//* SWITH(1,2,3,4) IF IT IS EQUAL TO CASE # IN THIS CASE CASE NUMBER WORKING ACCORDING TO SWITC CASE
//! IF YOU DO NOT USE THE "BREAK" IT SHOW UP IN THE CONSOLE LOG ALL THE CASES FROM 1 TILL THE LAST ONE

//** ------------------------------ WEEKLY DAYS ----------------------------- */

//* SHOWING THE DAYS OF THE WEEK ACCORDING TO THE SELECTED NUMBER

//* 1-MONDAY 2-TUESDAY 3-WEDNESDAY 4-THURSDAY 5-FRIDAY
//* 6-SATURDAY 7-SUNDAY

// let workingdays = Number(prompt("Please insert the 1-7 days"));

// switch (workingdays) {
//   case 1:
//     console.log(" You choosed MONDAY ");
//     break;
//   case 2:
//     console.log(" You choosed TUESDAY");
//     break;
//   case 3:
//     console.log("You choosed WEDNESDAY");
//     break;
//   case 4:
//     console.log("You choosed THURSDAY");
//     break;
//   case 5:
//     console.log("You choosed FRIDAY");
//     break;
//   case 6:
//     console.log("You choosed SATURDAY");
//     break;
//   case 7:
//     console.log("You choosed SUNDAY");
//     break;
//   default:
//     console.log("Please choose and number from 1-7 !!!");
//     break;
// }

//** ------------------------------ ATM ----------------------------- */

//* 1- CHECK THE BALANCE
//* 2- WITHDRAW MONEY
//* 3- INSERT MONEY
//* 4- EXIT FROM SYSTEM

let begginingBalance = 1000;
const space = "\n";
const finalBalance = 0;
const leftAmount = 0;

let options = Number(
  prompt(
    "Please choose one of the options in below;" +
      space +
      "1-BALANCE" +
      space +
      "2-WITHDRAW MONEY" +
      space +
      "3-ADD DEPOSIT" +
      space +
      "4-EXIT"
  )
);
switch (options) {
  case 1:
    console.log("Your Current Balance is:" + begginingBalance);
    break;
  case 2:
    let withDraw = prompt(
      "Please insert the amount you would like to withdraw"
    );
    leftAmount = begginingBalance - withDraw;
    if (withDraw <= begginingBalance)
      console.log(
        "Process Succeded!" + space + "Current Balance Left:" + leftAmount
      );
    else {
      console.log("you can take max 1000");
    }
    //? DO NOT FORGET WE TAKE THE AMOUNT THAN WE NEED
    //?TO MAKE CALCULATIONS FOR THE WITHDRAW AND SHOW HOW MUCH LEFT
    break;

  case 3:
    let deposits = prompt("Please insert the deposit amount");
    let finalBalance = deposits + leftAmount;
    alert("amount is good");
    break;
  case 4:
    alert("You left the system!!!");
}
