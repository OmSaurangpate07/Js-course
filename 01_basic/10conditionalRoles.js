// Switch Case Statement

// Create an following application with conditional roles :
// Admin - gets full access 
// Subadmin - gets access to create/ delete the courses
// Testprep - gets access to create/ delete the tests 
// user - gets access to consume the content

var user = "user";

switch (user) {
    case "Admin":
        console.log("Gets full access");
        break;
    case "Subadmin":
        console.log("Gets access to create/delete the courses");
        break;
    case "Testprep":
        console.log("Gets access to create/delete the exams");
        break;
    case "user":
        console.log("gets access to consume the content");
        break;
    default:
        console.log("you need to SignIn/SignUp");
        break;
}
