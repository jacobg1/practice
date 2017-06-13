//without function
var product = "Hanging Planter";
var orderAmount = 35;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
    console.log("It's your lucky day! There is no shipping charge for orders over $30.00.");
} else {
    console.log("There will be a $5.00 shipping charge for this order.");
}

var product = "Shell Mirror";
var orderAmount = 15;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
    console.log("It's your lucky day! There is no shipping charge for orders over $30.00.");
} else {
    console.log("There will be a $5.00 shipping charge for this order.");
}

var product = "Modern Shag Rug";
var orderAmount = 75;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
    console.log("It's your lucky day! There is no shipping charge for orders over $30.00.");
} else {
    console.log("There will be a $5.00 shipping charge for this order.");
}

//with function
var orderComplete = function (product, orderAmount) {
    console.log("Thank you for ordering the " + product + ".");
    if (orderAmount >= 30) {
        console.log("It's your lucky day! There is no shipping charge for orders over $30.00.");
    } else {
        console.log("There will be a $5.00 shipping charge for this order.");
    }
};

orderComplete("Hanging Planter", 35);
orderComplete("Shell Mirror", 15);
orderComplete("Modern Shag Rug", 75);