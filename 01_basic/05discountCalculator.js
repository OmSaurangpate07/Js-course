// Operators and Operator Precedence:

//Example: Discount Percentage Calculator

// Formula
// D = ((L - S)/ L) * 100
// D = Discount
// L = Listing Price
// S = Selling Price

var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage = ((listingPrice - sellingPrice)/ listingPrice) * 100;

// console.log("Discount Percentage : " + discountPercentage + "%");
displayDiscountPercentage = Math.round(discountPercentage);

console.log("Listing Price : " + listingPrice);
console.log("Selling Price : " + sellingPrice);
console.log("Discount Percentage : " + displayDiscountPercentage + "% off");
