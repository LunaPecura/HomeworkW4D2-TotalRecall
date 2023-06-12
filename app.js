// HOMEWORK WEEK 4 DAY 2 (JS TOTAL RECALL)
// 6/12/2023

/* I.A ***************************************************************************************/

// How do we assign a value to a variable?
let myVar = 0; 
console.log("myVar = " + myVar);

// How do we change the value of a variable?
myVar = 1;
console.log("myVar = " + myVar);

// How do we assign an existing variable to a new variable?
let myOtherVar = myVar;
console.log("myOtherVar = " + myOtherVar);

// Remind me, what are declare, assign, and define?
let declaredVar;        // declare
declaredVar = "abc";    // assign
let definedVar = "xyz"  // define

// What is pseudocoding and why should you do it?
// ==> lay out the process / algorithm before getting lost in the intricacies
//     of the specific programming language

// What percentage of time should be spent thinking about how you're going to solve a problem 
// vs actually typing in code to solve it?
console.log("80/20 is always a good answer to these types of questions :)");



/* I.B ***************************************************************************************/

// Create a variable called firstVariable
let firstVariable;
console.log("firstVariable: " + firstVariable);

// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
console.log("firstVariable: " + firstVariable);

// Change the value of this variable to some number
firstVariable = 123;
console.log("firstVariable: " + firstVariable);

// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
console.log("firstVariable: " + firstVariable);
console.log("secondVariable: " + secondVariable);

// Change the value of secondVariable to any string.
secondVariable = "any string";
console.log("secondVariable: " + secondVariable);

// What is the value of firstVariable?
// ==> 123
console.log("firstVariable: " + firstVariable);

// Create a variable called yourName and set it equal to your name as a string. 
// Then, write an expression that takes the string "Hello, my name is " 
// and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Julia";
const concatYourName = (name) => {
  return "Hello, my name is " + name;
}
console.log(concatYourName(yourName));



/* I.C ***************************************************************************************/

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); 
console.log(a * a === d); 
console.log(48 == '48');



/* I.D ***************************************************************************************/
/*
Commit
*/

// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

// Write code that will print out "mooooo" if the it is equal to cow
// ==> Um...? Okay, taking a guess here :)
const moo = (whatever) => {
  if (whatever === "cow") { console.log("mooooo"); }
  else { console.log("Wrong animal, buddy. Also -- Hey! You're not a cow."); }
}
moo(animal);

// Change your code so that if the variable animal is anything other than a cow, 
// it will print "Hey! You're not a cow."
let otherAnimal = "sheep";
moo(otherAnimal);


