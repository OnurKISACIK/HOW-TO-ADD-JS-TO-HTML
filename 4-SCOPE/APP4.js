//* SCOPE

//* - GLOBAL SCOPE
//* - FUNCTION SCOPE
//* - BLOCK SCOPE

//* - GLOBAL SCOPE: YOU CAN REACHE THE VARIABLES ANY WERE ONLY NOT IN WITHIN CURLYBRAKETS
//*   ALOT RAM USING

//* - FUNCTION SCOPE: VARIABLES WHICH DECLERADED INSIDE
//*   THE FUNCTION WITHIN CURLYBRAKETS AND CAN BE PRINTOUT ONLY WITHIN THE CURLYBRAKETS
//!   NOT OUTSIDE!!!

//* - BLOCK SCOPE: YOU CAN REACH THE VARIABLES ONLY WITHIN THE CURLYBRAKETS

//* GLOBAL SCOPE: EXAMPLE 1

let a = 5;
console.log(a); //?OUTCOME 5

//*EXAMPLE 2

//**ALSO WE CAN REACH WITHIN CURLYBRAKETS AS BELOW

if (a < 6) {
  setTimeout(() => console.log(a), 1e4);
}

//  //?OUTCOME 5
// console.log("b");
// //*EXAMPLE 3

// //* WE CAN REACH THE VARIABLES WITHIN FUNCTION

// function cars(BMW) {
//   console.log(a); //?OUTCOME 5
// }
// cars();

// //* FUNCTION SCOPE

// //*EXAMPLE 1

// function method() {
//   console.log(a);
// }
// method();

// //! WE CAN REACH THE VARIABLE WITHIN FUNCTION

// //* BLOCK SCOPE

// //* EXAMPLE 1

// function car1() {
//   if (true) {
//     var a = 15;
//     console.log("test -> ", a);
//   }
// }
// car1();

// //! VARIABLE CAN BE REACH WITHIN FUNCTION CURLYBRAKETS !!!
// //! NOT OUTSIDE THE CURLYBRAKETS
