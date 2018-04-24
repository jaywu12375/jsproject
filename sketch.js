// A HTML range slider
var slider;


function setup() {
  createCanvas(700, 700, WEBGL);
  colorMode(HSB, 255);
  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 255, 127);
}

function draw() {
  background(50);
  //object rotates with mouse
  rotateY(map(mouseX, 0, width, 0, PI));
  rotateX(map(mouseY, 0, height, 0, PI));
  // Set the hue according to the slider
  strokeWeight (2)
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  box(200);
}
