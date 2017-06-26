//HTML: <div class="circle"></div>
//JS:

document.querySelector('.circle').addEventListener('click', turnRed)

var turnRed = function () {
    this.style.backgroundColor = "red";
};


//this causes only the circle that is clicked to change red
//Select all elements with the class .circle on the page
var circles = document.querySelectorAll('.circle');

//loop through each .circle element and add an event handler.
for (var i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', turnRed);
}

var turnRed = function () {
    this.style.backgroundColor = "red";
};