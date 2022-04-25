let b; // Declare object
function setup() {
  b = new Ball();
}

function draw() {
  b.display();
}
class Ball {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.d = 80;
  }
  display() {
    ellipse(this.x, this.y, this.d, this.d);
  }
}
