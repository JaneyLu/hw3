var x = 230;
var y = 100;
var h = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225, 150, 0);
  noStroke();


  // draw drip
  fill(0, 200, 225)
  ellipse(x-12, y, 10);
  
  // draw pipe
  fill(200, 200, 225)
  rect(0, 80, x, 20);
  rect(200, 100, 30, 20);

  // draw water
  fill(0, 200, 225)
  rect(0, 400-h, 400, h);
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 2

  // if invisible for a full “height” amount…
  if (y > height) {
    // reset
    y = 100;
    h = h + 2;
  }
  
  if (y <= height) {
    // reset
    y = y + .01*y;
  }
}
