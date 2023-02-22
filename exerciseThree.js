function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  addSprite(200, 200, 1, 130, 40, 160);
}

function addSprite(x, y, size, r, g, b) {
  //function used to create the heart
  if (mouseIsPressed) {
    push();
    fill(r, g, b);
    translate(x, y);
    scale(size);
    beginShape();
    vertex(50, 100);
    vertex(0, 50);
    vertex(0, 20);
    vertex(25, 0);
    vertex(35, 0);
    vertex(50, 15); // first half of heart done
    vertex(65, 0);
    vertex(75, 0);
    vertex(100, 20);
    vertex(100, 50);
    endShape(CLOSE);
    pop();
  } else {
    push()
    fill(r, g, b);
    translate(x,y)
    ellipse(0, 0, 60);
    ellipse(10, -10, 20);
    ellipse(-10, -10, 20);
    pop()
  }
}
