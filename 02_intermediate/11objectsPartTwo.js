var user = {
    firstName: "Om",
    lastName: "Saurangpate",
    role: "Admin",
    loginCount: 44,
    googleSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in the total of ${this.courseList.length} courses`
    }
};

console.log(user.firstName);
user.buyCourse("ReactJs")
user.buyCourse("Angular")
console.log(user.getCourseCount());
console.log(user.courseList);