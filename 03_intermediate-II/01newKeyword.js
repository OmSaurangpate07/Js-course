var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

var hitesh = User("Hitesh", 2);
console.log(hitesh);
