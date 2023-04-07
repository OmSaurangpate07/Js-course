// Fill and Filter Method

/*
Fill Method:
The fill() method changes all elements in an array to a static value, 
from a start index (default 0) to an end index (default array.length). 
It returns the modified array.
*/

var testArray = [1, 2, 3, 4, 5, 6];
// console.log(testArray);

// console.log(testArray.fill("empty"));
/*
Output:
[ 'empty', 'empty', 'empty', 'empty', 'empty', 'empty' ]
*/

// console.log(testArray.fill("empty", 2));
/*
Output:
[ 1, 2, 'empty', 'empty', 'empty', 'empty' ]
*/

console.log(testArray.fill("empty", 2, 4)); 
// Here in the above case of fill method, 2 is inclusive and 4 is exclusive.
/*
Output:
[ 1, 2, 'empty', 'empty', 5, 6 ]
*/


/*
Filter method:
The filter() method creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the 
provided function.
*/

var numberArray = [22, 32, 46, 65, 44, 76];
var result = numberArray.filter((num) => num > 44);
console.log(result);
/*
Output: 
[ 46, 65, 76 ]
*/


// Slice And Splice 
/*
Slice:
The slice() method returns a shallow copy of a portion of an array into 
a new array object selected from start to end (end not included) where 
start and end represent the index of items in that array. The original array will not be modified. 
*/
var user = ["Ted", "Tim", "Tod", "sam", "john", "sid"];
// console.log(user.slice(1));
/*
Output: 
[ 'Tim', 'Tod', 'sam', 'john', 'sid' ]
*/

console.log(user.slice(1, 4));
/*
Output:
[ 'Tim', 'Tod', 'sam' ]
*/

/*
Splice:
The splice() method changes the contents of an array by removing or replacing existing elements 
and/or adding new elements in place. To access part of an array without modifying it, see slice().
*/
user.splice(1, 3, "HI", "Hello");
console.log(user);
/*
Output:
[ 'Ted', 'HI', 'Hello', 'john', 'sid' ]
*/


// Slicing
var fruits = ["Apple", "Pineapple", "Banana", "Kiwi", "watermelon", "Greps"];
// console.log(fruits.slice(1));
console.log(fruits.slice(2, 5)); // 2 is inclusive and 5 is exclusive

// Splicing
fruits.splice(1, 4, "Mango");
console.log(fruits);
