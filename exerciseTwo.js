function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //myTri(120, 130, 70, 24, 250, 130, 250, 100, 100);
  myEllipse(200, 200, 50, 130, 150, 70, 300);
  myTri(120, 130, 70, 24, 250, 130, 250, 100, 100);
  mySquare(250, 250, 100, 300, 180, 120);
}

function myTri(x1, x2, x3, x4, x5, x6, r, g, b) {
  fill(r, g, b);
  triangle(x1, x2, x3, x4, x5, x6);
}
function myEllipse(x, y, width, height, r, g, b) {
  fill(r, g, b);
  ellipse(x, y, width, height);
}
function mySquare(x, y, width, r, g, b) {
  fill(r, g, b);
  square(x, y, width);
}
