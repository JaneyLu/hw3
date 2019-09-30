# hw3
Lawn Mower analysis:

//"h" helps the grass height to grow into a random range of length (since it is growing up wards)
//

function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  //take color for the grass
  stroke(random(60, 70), 100, 90);
  //draw the grass
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

 //lawn mower come by when the height of the grass is bigger than 99.9 but within 100
  if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}

//What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?
//to set the grass root grows at the floor (the thickness of the land). heigh-10-random(h) represents the length which grass grows into. 
