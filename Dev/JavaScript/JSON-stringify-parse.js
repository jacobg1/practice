JSON rules include:

Property names must be double-quoted strings (not single quotes).
Trailing commas are forbidden.
Leading zeros are prohibited.
In numbers, a decimal point must be followed by at least one digit.
Most characters are allowed in strings; however, certain characters (such as ', ", \, and newline/tab) must be "escaped" with a preceding backslash (\) in order to be read as characters (as opposed to JSON control code).
All strings must be double-quoted.
No comments allowed!

//JSON formatting
{
  "name": "Sasha Li",
  "occupation": "Web Developer",
  "location": "San Francisco",
  "age": 43
}

{
	"name": "Eddie Vedder",
	"age": 49
}

//JavaScript to JSON (stringify)
var favoriteMovie = {
  title: 'Thelma and Louise',
  director: 'Ridley Scott',
  year: 1991,
  imdb: 7.4
};

favoriteMovie = JSON.stringify(favoriteMovie);

//JSON to JavaScript (parse)
var favoriteMovie = {
  "title": "Thelma and Louise",
  "director": "Ridley Scott",
  "year": 1991,
  "imdb": 7.4
};

favoriteMovie = JSON.parse(favoriteMovie);

