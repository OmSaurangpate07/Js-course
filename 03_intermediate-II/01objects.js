// The "new" Keyword
// It creates a new instance of a user define object type.

var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function() {
    console.log(`Your first name is: ${this.firstName}`);
}

var hitesh = new User("Hitesh", 2);
hitesh.getCourseCount();
// hitesh.getFirstName();
// console.log(hitesh);
if (hitesh.hasOwnProperty("firstName")) {
    hitesh.getFirstName();
}

var om = new User("Om", 4);
om.getCourseCount();
om.getFirstName();
// console.log(om);

