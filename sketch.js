let height = 400;
let width = 400;
let noiseMax = 2;
let zoff = 0;
let zoffSpeed = 0.01;
let phase = 0;
let phaseSpeed = 0.0025;
let r = 230;
let g = 230;
let b = 230;
let colorChange = 0;
let phaseDifferenceHalves = 0;

function setup() {
  createCanvas(width, height);
  pixelDensity(1);
  background(10);
}

function draw() {
  translate(width / 2, height / 2);
  noFill();
  let rW = floor(random(6));
  if (rW === 0 && r > 0) {
    r -= colorChange;
  } else if (rW === 1 && r < 255) {
    r += colorChange;
  } else if (rW === 2 && g > 0) {
    g -= colorChange;
  } else if (rW === 3 && g < 255) {
    g += colorChange;
  } else if (rW === 4 && b > 0) {
    b -= colorChange;
  } else if (rW === 5 && b < 255) {
    b += colorChange;
  }
  stroke(r, g, b, 255);
  strokeWeight(0.1);

  beginShape();
  for (let a = 0; a < PI; a += 0.001) {
    let xoff = map(16 * pow(sin(a + phase), 3) + 1, -1, 1, 0, noiseMax) + 1;
    let yoff = map(-1 * 13 * cos(a + phase) - 5 * cos(2 * a + phase) - 2 * cos(3 * a + phase) - cos(4 * a + phase) + 1, -1, 1, 0, noiseMax) + 1;
    let r = map(noise(xoff, yoff, zoff), 0, 1, 8.2, 13);
    let x = r * 16 * pow(sin(a), 3);
    let y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    vertex(x, y);
  }
  endShape();

  beginShape();
  for (let a = TWO_PI; a > PI; a -= 0.001) {
    let xoff = map(16 * pow(sin(a - phase + phaseDifferenceHalves), 3) + 1, -1, 1, 0, noiseMax);
    let yoff = map(
      -1 * 13 * cos(a - phase + phaseDifferenceHalves) -
        5 * cos(2 * a - phase + phaseDifferenceHalves) -
        2 * cos(3 * a - phase + phaseDifferenceHalves) -
        cos(4 * a - phase + phaseDifferenceHalves) +
        1,
      -1,
      1,
      0,
      noiseMax
    );
    let r = map(noise(xoff, yoff, zoff), 0, 1, 8.2, 13);
    let x = r * 16 * pow(sin(a), 3);
    let y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    vertex(x, y);
  }
  endShape();

  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      pixels[index + 0] -= 1.3;
      pixels[index + 1] -= 1.3;
      pixels[index + 2] -= 1.3;
    }
  }

  updatePixels();

  zoff += zoffSpeed;
  phase += phaseSpeed;
}
