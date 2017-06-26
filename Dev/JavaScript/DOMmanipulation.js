/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Manipulation</title>
</head>
<body>

    <h1>Shopping List</h1>
    <ul>
      <li>Tortillas</li>
      <li>Lettuce</li>
      <li>Peppers</li>
      <li id="important">Cheese</li>
      <li>Beans</li>
    </ul>

</body>
</html>
*/


//innerHTML

document.getElementsByTagName('li')[0].innerHTML = '<a href="http://allrecipes.com/recipe/17500/corn-tortillas/">Corn Tortillas</a>';

//storing as variable

var firstListItem = document.getElementsByTagName('li')[0].innerHTML;

//using text content vs innerHTML- textContent lists text, innerHTML creates a link

document.getElementById('important').textContent = 'Check!';

//adding elements
//create and store as variable
var newListItem = document.createElement('li');

//to update text of item
newListItem.textContent = 'Jalapenos';

//to add item
document.getElementsByTagName('ul')[0].appendChild(newListItem);


//to create a class (can then add styling with css)
document.getElementById('important').className = 'complete';

//setAttribute() & remoteAttribute()
//to update a link in an item
document.getElementsByTagName('a')[0].setAttribute('href', 'http://newurl.com');

//to remove id from element
document.getElementsByTagName('a')[0].removeAttribute('id');



