// "this" keyword: Introduction

console.log(this);

// The output of the above console.log in terminal using node will be:
// {}

// In the case of browser "this" keyword gives us a window object

var game = "Cricker";
function sayName() {
    var name = "Virat Kohli";
    console.log(this);
}

sayName();
