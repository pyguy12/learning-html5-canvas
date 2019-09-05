let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//This function will be called constantly using requestAnimationFrame. The function we pass in will be called to update the animation. In this
//case, we're just recursively calling the animate function, causing a loop to happen.

//These variables are used to change the value of the animation.
let x = 100;
let dx = 5;
let radius = 30;
const animate = () => {
  requestAnimationFrame(animate);

  //We use clearRect to clear the canvas each time we run the function. Otherwise, the circle from the previous animation frame would still be
  //there in the next animation frame.
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  c.beginPath();
  c.arc(x, 100, radius, 0, Math.PI * 2, false);
  c.stroke();

  //Changes direction of velocity (dx) once x reaches the edges of the screen. The position of the circle is measured from its center so that's
  //why we use the radius to make it bounce once the edge touches the window's edge.
  if (x + radius > window.innerWidth || x - radius < 0) {
    dx = -dx;
  }

  x += dx;
};

animate();
