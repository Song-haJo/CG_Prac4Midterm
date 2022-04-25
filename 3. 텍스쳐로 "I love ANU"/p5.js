let txt;
function setup() {
  createCanvas(800,600,WEBGL);

  txt = createGraphics(800,600);
  txt.textAlign(CENTER);
  txt.textSize(133);
  txt.text('I love ANU', 400,300);
}

function draw() {
  background(170);
  rotateX(map(mouseX, 0, width, 0, 3));
  rotateY(map(mouseY, 0, width, 0, 3));
  texture(txt);
  box(width/4);
}
