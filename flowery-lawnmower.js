function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var y = 0;
var h = 50;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;
  y = height-50;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random(h) >= 49) {
    fill(225, 225, 225);
    circle(x, y, 10, random(h));
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
