var sum = function (x, y) {
  return x + y;
};
var totalSum = sum(3, 4);


var addBonusPoints = function (score) {
    if (score > 50) {
        return score + (score * .10);
    }

    return score;
};

var totalPoints = addBonusPoints(55);

var rockAndRoll = function (muted) {
   var song = "It's only Rock 'N' Roll";
   var artist = "Rolling Stones";

   if (muted === true) {
       return; // Here we use return as a way to exit a function, instead of returning any value
   }

    console.log("Now playing: " + song + " by " + artist);
};
//stops function from executing
rockAndRoll(true);

//returns name
var sayHello = function(name) {
  return "Hello, " + name;
};
//in console:
sayHello("jacob");

//are both even?
var areBothEven = function (num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
      return true;
  } else {
      return false;
  }
};

//hot or not
var hotOrNot = function (temp) {
  if (temp > 70) {
      return "It's hot!";
  } else {
      return "It's not hot.";
  }
};