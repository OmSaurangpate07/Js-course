// Call back and arrow function.

function isEven(element) {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;

    return element % 2 === 0
}
// console.log(isEven(4));

// .every is use to grab each and every element in an array.
// var result = [2, 3, 6, 8].every(isEven);
// console.log(result);

// var result = [2, 4, 6, 8].every((e) => {
//     return e%2 === 0;
// });
// console.log(result);

var result = [1, 2, 4, 6, 8].every((e) => (e % 2 === 0));
console.log(result);
