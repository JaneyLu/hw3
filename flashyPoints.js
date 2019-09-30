function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

// track the circle to draw next frame
var x = 25;
var y = 25;

function draw() {
  background(100,100,100);
  colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(random(100), 100, 100);
  ellipse(x, y, 30);

  // set up next circle
  x = x + 50;

  // if we hit the right edge, go down a line
  if (x > width-25) {
    x = 25;
    y = y + 5;
  }

  // if we hit the bottom edge, reset to top
  if (y > height-25) {
    y = 25;
  }
}
