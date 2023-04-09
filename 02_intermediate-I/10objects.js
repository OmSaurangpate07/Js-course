// Objects in JavaScript
var user = {
    firstName : "Om",
    lastName : "Saurangpate",
    role : "Admin",
    loginCount : 44,
    googleSignedIn : true
};

console.log(user.firstName);
// console.log(user["firstName"]);
console.log(user.lastName);
console.log(user.role);
console.log(user.loginCount)
user.loginCount = 45;
console.log(user.loginCount);
console.log(user.googleSignedIn);

console.log(user);
console.table(user);
