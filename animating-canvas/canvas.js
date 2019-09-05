let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.beginPath();
c.arc(100, 100, 30, 0, Math.PI * 2, false);
c.stroke();
