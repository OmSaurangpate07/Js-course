// The "new" Keyword
// It creates a new instance of a user define object type.

var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

var hitesh = new User("Hitesh", 2);
console.log(hitesh);

var om = new User("Om", 4);
console.log(om);
