// Arrays 

/*
What is Array?
--> An array is an ordered collection of data (either primitive or object depending upon the language). 
Arrays are used to store multiple values in a single variable.
*/

var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Maharashtra", "Rajasthan", "Delhi", "Assam");

states[2] = "Goa"

console.log(states[0]);
console.log(states[1]);
console.log(states[2]);
console.log(states[3]);

console.log(states);
console.log(`The length of array is: ${states.length}`);


var user = ["Om", "om@dev.com", 4, 34, true];

user.pop(); //Removes last element from the array;

user.push("om_saurangpate")
console.log(user); //Adds the value at the very last of the array

user.unshift("NEW VALUE"); //Adds the value at the very first of the array 

user.shift(); //Removes first element from the array;
// console.log(user);
// console.log(user.indexOf(4));
// console.log(user.indexOf("newyy")); //If the value is not there in array then it gives -1.
// console.log(Array.from("HITESH")); //Converts the string in the Array O/p: [ 'H', 'I', 'T', 'E', 'S', 'H' ];

/*
Practice on Arrays and its methods: 

// var user = ["Om", "om@dev.com", "4", "44"];
var user = new Array("Om", "om@dev.com", "4", "44");

user.pop(); //Removes last element

user.shift(); //Removes first element

user.unshift("Om"); //Add element in the very first

user.push("44"); //Add element in the very last
console.log(user);

console.log(user.length);
console.log(user.indexOf("Om"));
console.log(Array.from("HITESH"));
*/
