//works but inefficient (no parameters)

var latteTotal = function () {
  var price = 4.50;
  var salesTaxRate = .10;
  var totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
};

latteTotal();

var americanoTotal = function () {
  var price = 5.00;
  var salesTaxRate = .10;
  var totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
};

americanoTotal();

//do this instead (w/ parameters)
var calculateTotal = function (price, salesTaxRate) {
  var totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
};

calculateTotal(5.5, .10);
calculateTotal(4.75, .12);

//multiple parameters
var greetUser = function(firstName, lastName, year, city) {
  console.log("Hello " + firstName + " " + lastName + " born in "+ year + " from " + city + "!" );
};
greetUser("Bruce", "Wayne", 1939, "Gotham");

//practice
var makeCone = function (flavor, numberScoops) {
  console.log("Coming right up! One " + flavor + " ice cream cone with " + numberScoops + " scoops.");
}
makeCone("chocolate", 3);