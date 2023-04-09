// "this" Keyword
// For all regular function calls, this points to window object

console.log(this);

var user = {
    firstName : "Om",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 10", this);
        function sayHello() {
            console.log("Hello");
            console.log("Line 13", this);
        }
        sayHello();
    }
}

user.getCourseCount();
