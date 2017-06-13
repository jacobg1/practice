//objects
var myBicycle = {
  color: "brown",
  model: "DL165",
  make: "Raleigh Competition",
  year: 1976
};

myBicycle.make;  
// => "Raleigh Competition"

myBicycle.color; 
// => "brown"

//to update values
myBicycle.color = "white";
myBicycle.year = 1977;

//will add new property with value even if not defined in original expression
myBicycle.frameSize = 23.5;

//syntac for array containing objects
var garden = [
   {
       color: 'red',
       flower: 'rose',
       petals: 20
   },
   {
       color: 'blue',
       flower: 'violet',
       petals: 6
   }
];

//loop example
for (var i = 0; i < arrayName.length; i++) {
   console.log(contacts[i].email); 
}