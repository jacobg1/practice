//example1
var beverages = ["coffee", "tea", "hot chocolate", "milk"];
var leapYears = [2016, 2020, 2024, 2028];

var stuff = ["red", 42, "gorilla", false];

//example2
var characters = ['Darth Vader', 'Princess Leia', 'Han Solo', 'Luke Skywalker'];
var favoriteCharacter = characters[1];
var secondFavoriteCharacter = characters[2];

//to update a variable
characters[1] = 'Yoda';
//result
['Darth Vader', 'Yoda', 'Han Solo', 'Luke Skywalker'];

//ex: if run the following
var myNumbers = [4, 65, 0 , 29];
myNumbers[0];
myNumbers[1] = 10;
myNumbers[2] = 5;
myNumbers[1] = 2 * 2;
console.log(myNumbers);
//result:
[4, 4, 5, 29]


//.length feature, give length everytime you type var in console
var name = ['John', 'Paul', 'Mary'].length;
console.log(name);
// => 3

//allows command numbers.length (recommend)
var numbers = [10, 20, 30, 40];
numbers.length;
// => 4

//to find last, send to last, third to last etc
var favoriteAthletes = ['Michael Jordan', 'Mike Tyson', 'Babe Ruth', 'Muhammad Ali', 'Stephen Curry'];

favoriteAthletes[favoriteAthletes.length - 1];
// => 'Stephen Curry'.

favoriteAthletes[favoriteAthletes.length - 2];
// => 'Muhammad Ali'.

