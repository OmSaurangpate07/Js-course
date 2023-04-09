// Scope Chaining

var name = "Hitesh";
console.log("Line number 2", name);

function sayName() {
    var name = "Mr. H";
    console.log("Line number 6", name);

    function sayNameTwo() {
        var name = "Mr. OS";
        console.log("Line number 10", name);
    }
    sayNameTwo();
}

sayName();
