//event handler syntax
element.addEventListener('nameOfEvent', functionToRun);

// Step 1
var alertUser = function () {
  alert('Button has been clicked!');
};

// Step 2
var button = document.querySelector('button');

// Step 3
button.addEventListener('click', alertUser);

//EX:
 document.getElementsByTagName('button')[0].addEventListener('click', addItem);




/*<form>
    <input id="email" type="email" placeholder="Email Address">
</form>*/

// First in our JS, let's find the email input field.
var emailInputField = document.getElementById('email');


// Next let's set up that function we want to run when the blur event occurs:

var tabAway = function () {
    alert("Field is no longer in focus");

};

// Finally, let's add our event handler that will trigger the function when the user hits tab or clicks out of the email field (the 'blur' event).
emailInputField.addEventListener('blur', tabAway);