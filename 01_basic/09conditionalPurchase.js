// Conditional Statement

// Example:
// User is only allowed to make purchase when he is:
// logged in
// cardInfo - valid
// If any one field is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged in successfully");
//     if (isEmailVerified) {
//         console.log("Email is Verified");
//         if (cardInfo) {
//             console.log("Allow user to make a purchase")
//         }
//     }
// } else {
//     console.log("Please LogIn/SignIn");
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase");
} else {
    console.log("Please LogIn/SignIn");
}
