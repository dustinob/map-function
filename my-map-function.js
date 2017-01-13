/**
Create a custom version of the map() function.
My function will take two arguments: The array and the callback function.
The function will return and new array based on the callback function.
*/

var data = ["Lighthouse", "is", "full", "of", "friendly", "people"];


function map(array, cb) {
  var newArray = [];

  for (index of array) {
    newArray.push(cb(index));
  }
  return newArray;
};


console.log(map(data, function(word) {
    return word.length;
}));




/*
var numbers = [1, 5, 10, 15];
var roots = numbers.map(function(x){
   return x * 2;
});
// roots is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
*/
