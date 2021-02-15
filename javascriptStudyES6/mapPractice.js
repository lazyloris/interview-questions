/*

    map will take an array and return a new array with processing

    map will accept a function and return a new variable based on processing.
    You can also return an array from an object within an array see example

*/

var images = [
    {height: '34px', width: '39px'},
    {height: '54px', width: '19px'},
    {height: '83px', width: '75px'}
];

var heights = images.map((image)=>{return image.height});
console.log(heights);


var trips = [
    {distance: '34', time: '10'},
    {distance: '90', time: '50'},
    {distance: '59', time: '25'}
];

var speeds = trips.map((trip)=>{return trip.distance / trip.time});
console.log(speeds);