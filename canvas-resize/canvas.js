//Selecting canvas from dom and assigning it to canvas variable.
let canvas = document.querySelector('canvas');

//Assigning the canvas width. It's better to do this with JS instead of CSS because CSS doesn't actually give you an accurate width and height.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Defining context (c) variable. This pretty much just gives the c variable a library of methods for our canvas.
let c = canvas.getContext('2d');

//Determines the fill color. Things take the fill color of whatever the current value is. You can change it to color things differently.
c.fillStyle = 'rgba(255,0,0,0.5)';

//Makes a rectangle. c.fillRect(x, y, width, height)
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'blue';
c.fillRect(300, 300, 100, 100);

//Drawing a line, must start with c.beginPath();
c.beginPath();

//c.moveTo(x,y) determines starting point of line.
c.moveTo(50, 300);

//c.lineTo(x,y) is where we want to draw the next line to from the starting point. You can tack on multiples lines.
c.lineTo(300, 100);
c.lineTo(400, 300);

// c.strokeStyle = "some css property representing color"; Only works for strokes.
c.strokeStyle = 'blue';

//c.stroke() makes the line visible.
c.stroke();

//Arc / circle

//c.beginPath() tells JS that you're making a separate path and it shouldn't connect the last one.
c.beginPath();

//c.arc(x,y,radius,starting degree, ending degree, direction)
c.arc(500, 500, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'green';
c.stroke();

//Creating multiple circles

for (let i = 0; i < 50; i++) {
  c.beginPath();

  //Math.random() returns a random value between 1 and 0.
  c.arc(
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight,
    30,
    0,
    Math.PI * 2,
    false
  );
  c.strokeStyle = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  c.stroke();
}
