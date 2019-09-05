//Circle class
class Circle {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
  }

  update() {
    //Changes direction of velocity (dx) once x reaches the edges of the screen. The position of the circle is measured from its center so that's
    //why we use the radius to make it bounce once the edge touches the window's edge.
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
      c.strokeStyle = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
      c.strokeStyle = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    }

    //Changing the position variables causes a change in the next animation frame, making the illusion of motion.
    this.y += this.dy;
    this.x += this.dx;
  }
}

//Canvas code starts here
let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

//This function will be called constantly using requestAnimationFrame. The function we pass in will be called to update the animation. In this
//case, we're just recursively calling the animate function, causing a loop to happen.

//These variables are used to change the value of the animation.
let x = Math.random() * window.innerWidth;
let dx = (Math.random() - 0.5) * 8;
let y = Math.random() * window.innerHeight;
let dy = (Math.random() - 0.5) * 8;
let radius = 30;

let circle = new Circle(x, y, radius, dx, dy);

const animate = () => {
  requestAnimationFrame(animate);

  //We use clearRect to clear the canvas each time we run the function. Otherwise, the circle from the previous animation frame would still be
  //there in the next animation frame.
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circle.draw();
  circle.update();
};

animate();
