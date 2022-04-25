function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
}
// https://editor.p5js.org/Francesca.Fabian/sketches/Syfq0rE0Q
