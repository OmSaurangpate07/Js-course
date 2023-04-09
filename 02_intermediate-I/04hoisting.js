// Code Hoisting

// Function declaration is scanned and made avilable

tipper("5")
function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

// Variable declaration is scanned and made undefined
var bigTipper = function (a) {
    bill = parseInt(a);
    console.log(bill + 15);
}
bigTipper("200");

// The below code gives undefined because of the above statement
console.log(name);
var name = "Hitesh";
