let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//This function will be called constantly using requestAnimationFrame. The function we pass in will be called to update the animation. In this
//case, we're just recursively calling the animate function, causing a loop to happen.

//These variables are used to change the value of the animation.
let x = 100;
let y = 100;
const animate = () => {
  requestAnimationFrame(animate);

  //We use clearRect to clear the canvas each time we run the function. Otherwise, the circle from the previous animation frame would still be
  //there in the next animation frame.
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.stroke();

  x += 1;
  y += 1;
};

animate();
