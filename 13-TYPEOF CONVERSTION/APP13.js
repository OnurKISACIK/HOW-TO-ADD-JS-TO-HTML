//*------------------- DATA TYPE AND CONVERSIONS ---------------------- */

//* JAVASCRIPT HAS 8 DATA TYPES THERE ARE;
//* STRING, NUMBER, BOOLEANS, UNDEFINED, NULL, OBJECT, FUNCTION
//! JAVASCRIPT CAN HOLD ANY TYPE OF DATA
//! IF WE WOULD LIKE TO MAKE SOME ACTIVITY WE NEED TO KNOW DATE TYPES

//* ------------- FROM STRING TO NUMBER ------------------*/

let x = "5";
console.log(typeof x);
console.log(x);

//? TYPEOF STRING
//? 5

let a = Number("3");
console.log(typeof a);
console.log(a);

//? TYPEOF NUMBER
//? 3

//*     parsefloat()      */

//* WE CAN ALSO EXCHANGE THE STRING TO NUMBER WITH parseFloat

let b = parseFloat("5");
console.log(typeof b);
console.log(b);

//*     parceInt()       */

//* WE CAN CHANGE THE DECIMINAL NUMBERS TO PLAIN NUMBER

//* 12.33 ---> 12

let c = parseInt("12.33");
console.log(typeof c);
console.log(c);

//* ------------- FROM NUMBER TO STRING  ------------------*/

//*      String()          */

//* WE CAN EXCHANGE TO NUMBER TO STRING

let d = String(5);
console.log(typeof d);
console.log(d);

//*      .toString()         */

let e = (55).toString();
console.log(typeof e);
console.log(e);

//! let f = Number("B");
//! YOU CAN NOT CONVERT THIS OUT COME A NaN (NOT A NUMBER)!!!!

//* ----------------- FROM ARAY TO STRING ------------------ */

let rakamlar = [1, 2, 3, 4];
console.log(rakamlar);
let girisler = String([1, 2, 3, 4]);
console.log(typeof girisler);
console.log(girisler);
