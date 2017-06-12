 var x = 5; // Test using different values for x.

 if (x % 3 === 0 && x % 5 === 0) {
   result = "fizzbuzz";
 } else if (x % 3 === 0) {
   result = "fizz";
 } else if (x % 5 === 0) {
   result = "buzz";
 } else {
   result = x;
 }

 var result;
var max = 20; // Test out different values for max

for (var x = 1; x <= max; x += 1) {
    if (x % 3 === 0 && x % 5 === 0) {
      result = "fizzbuzz";
    } else if (x % 3 === 0) {
      result = "fizz";
    } else if (x % 5 === 0) {
      result = "buzz";
    } else {
      result = x;
    }
  console.log(result);
}