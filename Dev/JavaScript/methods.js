var myBicycle = {
  // Properties
  color: "brown",
  model: "DL165",
  make: "Raleigh Competition",
  year: 1976,

  // Method
  accelerate: function () {
      console.log("Zoom zoom!");
  }
};

// Here we are "calling" the accelerate method.
myBicycle.accelerate(); 
// => "Zoom zoom!"


//another method example
var pet = {
 name: "Rover",
 species: "dog",
 favoriteToy: "tennis ball",
 age: 5,
 makeNoise: function () {
     console.log("Woof!");
 }
};

pet.makeNoise();

//with "this"
var myBicycle = {
  // Properties
  color: "brown",
  model: "DL165",
  make: "Raleigh Competition",
  year: 1976,

  // Methods
  getMakeAndColor: function () {
      console.log("My bicycle is a " + this.color + " " + this.make);
  },
  accelerate: function () {
      console.log("Zoom zoom!");
  }
}; 