let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouseDown = false;

canvas.addEventListener('mousedown', e => {
  c.beginPath();
  c.fillRect(e.clientX, e.clientY, 20, 20);
});

canvas.addEventListener('mouseup', () => {
  mouseDown = false;
});
