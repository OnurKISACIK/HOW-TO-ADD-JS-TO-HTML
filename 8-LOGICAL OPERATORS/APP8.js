//**--------------------------LOGICAL OPERATORS*****************---------------------- */

//* && (AND)
//* || (OR)
//* !  (NOT)

//**--------------------------------------- */

//* && - ALL THE CONDITIONS MUST BE TRUE IF THERE IS ONE CONDITIONS FALSE THAN RESULT IS FALSE

console.log(5 > 3 && 2 < 5);

//? OUTCOME: TRUE (5>3 TRUE - 2<5 TRUE) ALL THE CONDITIONS IS TRUE

console.log(2 > 3 && 5 > 1);

//? OUTCOME: FALSE (2>3 FALSE - 5>1 TRUE) OF THE CONDITONS IS NOT MET THATS WHY

//**--------------------------------------- */

//* || - AT LEAST ONE OF THE CONDITIONS MUST BE TRUE AND RESULT WILL BE TRUE

console.log(1 < 5 || 5 > 10);

//? OUTCOME: TRUE (1<5 TRUE - 5>10 FALSE) AT LEAST ONE OF THE CONDITIONS MET AND THATS WHY TRUE

//**--------------------------------------- */

//* ! - WHEN WE USE RESULTS ALWAYS CHANGE AS OPPOSITE

console.log(2 == "2");

//? OUTCOME: TRUE

console.log(!(2 == "2"));

//? OUTCOME: FALSE ( WHEN WE USE "!" IT CHANGE THE RESULT AS OPPOSITE)
