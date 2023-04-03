// Conditional Statement

// Example: Conditional Login
// User Login 
// Allow user to access course if he is:
// logged in from Google 
// logged in from Email
// logged in from Facebook

var loggedInWithGoogle = true;
var loggedInWithEmail = false;
var loggedInWithFacebook = false;

// if (loggedInWithGoogle) {
//     console.log("Logged In with Google");
// }
// if (loggedInWithEmail) {
//     console.log("Logged In with Email");
// }
// if (loggedInWithFacebook) {
//     console.log("Logged In with Facebook");
// }

if (loggedInWithGoogle || loggedInWithFacebook || loggedInWithEmail) {
    console.log("Logged In Successfully...")
} else {
    console.log("LogIn first");
}
