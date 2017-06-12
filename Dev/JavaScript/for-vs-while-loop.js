//The while loop is usually used when you need to repeat something until a given condition is true:

ovenTemperature = 0;

while (ovenTemperature < 350) {
  console.log('Keep preheating the oven.');
  ovenTemperature += 5;
}

for loop is usually used when you need to iterate a given number of times:

for (var i = 0; i < 10; i += 1) {
  // Do ten push-ups
  console.log('Do another push-up!');
}