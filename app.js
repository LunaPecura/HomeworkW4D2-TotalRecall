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



/* I.E ***************************************************************************************/

// Make a variable that holds a person's age; be semantic
let myBabysAge = 5;
let myAge = 40;

// Write code that will print out "Here are the keys!", if the age is 16 years or older, 
// or, if the age is younger than 16, a message should print "Sorry, you're too young."
const checkDriversAge = (age) => {
  if(age >= 16) { console.log("Here are the keys!"); }
  else if(age < 16) { console.log("Sorry, you're too young."); }
  else { console.log("What are you trying to do here?!"); }
}

checkDriversAge(myBabysAge);
checkDriversAge(myAge);



/* II.A ***************************************************************************************/

// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i=0; i<=10; i++) { console.log(i); }

// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i=10; i<=400; i++) { console.log(i); }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i=12; i<=4000; i+=3) { console.log(i); }



/* II.B ***************************************************************************************/

// Print out the numbers that are within the range of 1 - 100
for(let i=1; i<=100; i++) { console.log(i); }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i=1; i<=100; i++) {
  if(i % 2 === 0) { console.log(i + " <-- is an even number"); }
  else { console.log(i); }
}



/* II.C ***************************************************************************************/

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i=0; i<=100; i+=5) { console.log("I found a " + i + ". High five!"); }

// Add to the code from above to print out "I found a number. Three is a crowd" 
// if the number is a multiple of three.
// For numbers divisible by both three and five, be sure your code prints both messages
for (let i=0; i<=100; i++) { 
  if (i % 5 === 0) { console.log("I found a " + i + ". High five!"); } 
  if (i % 3 === 0) { console.log("I found a " + i + ". Three is a crowd."); }
}



/* II.D ***************************************************************************************/

// Write code that will save the sum of all the numbers between 1 - 10 to a variable 
// called bank_account. Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for (let i=1; i<=10; i++) { bank_account += i; }
console.log(bank_account);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum 
// of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
bank_account = 0;
for (let i=1; i<=100; i++) { bank_account += 2*i; }
console.log(bank_account);



/* III.A **************************************************************************************/

// What are the things in an array called?
// ==> elements

// Do Arrays guarantee those things will be in order?
// ==> Yes, if you consider the indices the "order".

// What real-life thing could you model with an array?
// ==> days of the year



/* III.B **************************************************************************************/

// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["This is the first quote.", "This is the second quote", "This is the third quote."];
console.log(quotes);



/* III.C **************************************************************************************/

// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];

// How do you access the 1st element in the array?
console.log(randomThings[0]);

// Change the value of "Hello" to "World"
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. 
console.log(randomThings);



/* III.D **************************************************************************************/

// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);



/* III.D **************************************************************************************/

// Given the following array: 
const myArray = [5, 10, 500, 20];
console.log(myArray);

// Add the string "Aegon" to the end of the array. 
myArray.push("Aegon");
console.log(myArray);

// Add another string of your choice to the end of the array.
myArray.push("a string of my choice");
console.log(myArray);

// Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// Reverse this array using Array.prototype.reverse().
myArray.reverse();
console.log(myArray);

// Did you mutate the array? 
// ==> yes

// What does mutate mean? 
// ==> changing the content of a variable

// Did the .reverse() method return anything?
// ==> yes, it returns a reference to the array that had just been reversed









