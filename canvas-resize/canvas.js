//Selecting canvas from dom and assigning it to canvas variable.
let canvas = document.querySelector('canvas');

//Assigning the canvas width. It's better to do this with JS instead of CSS because CSS doesn't actually give you an accurate width and height.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Defining context (c) variable. This pretty much just gives the c variable a library of methods for our canvas.
let c = canvas.getContext('2d');

//Makes a rectangle. x, y, width, height
c.fillRect(100, 100, 100, 100);
