/*
<!DOCTYPE html>
<html>
<h1>Pizza Toppings</h1>
<ul>
	<li class="vegetarian">Green Peppers</li>
	<li class="vegetarian">Jalapenos</li>
	<li>Pepperoni</li>
	<li>Sausage</li>
</ul>
</html>
*/
document.getElementById('idname') 				
document.getElementsByClassName('vegetarian')  //all with class of vegetarian
document.getElementsByTagName('li')            //all with tag li

document.querySelectorAll('.vegetarian')      //all with class vegetarian
document.querySelector('.vegetarian')         //first in vegetarian class
document.querySelector('li')				  //first with tag li

//returns 3rd item in li node list
document.getElementsByTagName('li')[2]    

//loops through node list and changes class to 'due'
var listItems = document.getElementsByTagName('li');

for (var i = 0; i < listItems.length; i +=1) {
	listItems[i].className = 'due';
}

//returns parent of node in this case 'ul'

document.getElementsByTagName('li'[0].parentNode)

nextSibling //(returns next sibling. ex: calling next sibling on first li will return 2nd li)

previousSibling //returns previous, on second li, returns first

firstChild //first child of selected element

lasChild //last child of selected element

//text update
document.getElementById('idname').textContent = "Updated!";