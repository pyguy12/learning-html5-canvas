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
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
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

let circles = [];

for (let i = 0; i < 100; i++) {
  let x = Math.random() * window.innerWidth;
  let dx = (Math.random() - 0.5) * 8;
  let y = Math.random() * window.innerHeight;
  let dy = (Math.random() - 0.5) * 8;
  let radius = 30;

  circles.push(new Circle(x, y, radius, dx, dy));
}

const animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  circles.forEach(circle => {
    circle.draw();
    circle.update();
  });
};

animate();
