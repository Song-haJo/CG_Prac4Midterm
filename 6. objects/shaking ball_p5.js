let b = []; // Declare object
let i, sz = 50;
function setup() {
  createCanvas(710, 400);
  for(i=0;i<sz;i++) b[i] = new Ball();   
}

function draw() {
  background(50, 89, 100);
  for(i=0;i<sz;i++){
    b[i].move();
    b[i].display();
  }
}
class Ball {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(5, 40);
    this.speed = 2;
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
// https://p5js.org/examples/objects-objects.html
