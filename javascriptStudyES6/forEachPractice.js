/*
    this is an example of forEach
    note for forEach we pass it a function. first parameter is what we will iterate on
    second parameter is optional but the iteration value

    we can then do things in our function based on the iteration
    *** we do not return anything

*/

ar images = [
    { height: 10, width: 30},
    { height: 20, width: 90},
    { height: 30, width: 32}
];

    var areas = [];
    //note here we are using optional iteration count.
    //also note we dont return anthing
    images.forEach((image, i)=>{areas[i]=image.height*image.width});
    console.log(areas);