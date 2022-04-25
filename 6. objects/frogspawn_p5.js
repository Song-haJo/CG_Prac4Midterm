let b = [];
let i;
let sz=25;
function setup() {
  for(i=0;i<sz;i++){
    b[i] = new Ball();
  }
}

function draw() {
  for(i=0;i<sz;i++){
    b[i].display();
  }
}
class Ball {
  constructor() {
    this.x = 50+random(-50,50);
    this.y = 50+random(-50,50);
    this.d = 25+random(-24,15);
  }
  display() {
    fill(0,255,0);
    ellipse(this.x, this.y, this.d, this.d);
    fill(255,0,255);
    ellipse(this.x, this.y, this.d/2, this.d/2);
  }
}
