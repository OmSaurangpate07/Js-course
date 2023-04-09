// for, while and do-while loop 

var myStates = [
    "Maharashtra",
    "Rajasthan",
    "Delhi",
    1946,
    "Goa",
    "Assam",
    "Kerla",
    "Telangana"
];

// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== "string") continue;
//     console.log(myStates[i]);
// }

// for (let i = 0; i < myStates.length; i++) {
//     if (typeof myStates[i] !== "string") break;
//     console.log(myStates[i]);
// }


// While Loop
// let i = 0; 
// while (i < myStates.length) {
//     console.log(myStates[i]);
//     i++;
// } 


// do-while loop
let i = 0;
do {
    console.log(myStates[i]);
    i++;
} while (i < myStates.length);
