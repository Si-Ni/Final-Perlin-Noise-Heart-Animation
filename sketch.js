let height = 800;
let width = 800;
let noiseMax = 2;
let zoff = 0;
let zoffSpeed = 0.01;
let phase = 0;
let phaseSpeed = 0.0007;
let r = 150;
let g = 150;
let b = 150;
let colorChange = 5;

function setup() {
  createCanvas(width, height);
  background(10);
}

function draw() {
  let weight = 1;
  translate(width/2, height/2);
  noFill();
  let rW = floor(random(6));
  if(rW === 0 && r > 0){
    r -= colorChange;
  }else if(rW === 1 && r < 255){
    r += colorChange;
  }else if(rW === 2 && g > 0){
    g -= colorChange;
  }else if(rW === 3 && g < 255){
    g += colorChange;
  }else if(rW === 4 && b > 0){
    b -= colorChange;
  }else if(rW === 5 && b < 255){
    b += colorChange;
  }

  stroke(r, g, b, 50);
  strokeWeight(0.1)
  beginShape();
  for(let a = 0; a < TWO_PI; a+=0.01){
    let xoff = map(16 * pow(sin(a),3) + 1, -1, 1, 0, noiseMax);
    let yoff = map((-1) * 13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a) + 1, -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 6, 8)      
    let x = r * 16 * pow(sin(a),3);
    let y = -r * (13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
    vertex(x,y)
  }
  endShape();
  beginShape();
  for(let a = 0; a < TWO_PI; a+=0.01){
    let xoff = map(16 * pow(sin(a+phase),3) + 1, -1, 1, 0, noiseMax) + 1;
    let yoff = map((-1) * 13 * cos(a+phase) - 5 * cos(2*a+phase) - 2 * cos(3*a+phase) - cos(4*a+phase) + 1, -1, 1, 0, noiseMax) + 1;
    let r = map(noise(xoff, yoff, zoff), 0, 1, 8.2, 11.5)       
    let x = r * 16 * pow(sin(a),3);
    let y = -r * (13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
    vertex(x,y)
  }
  endShape();
  beginShape();
  for(let a = 0; a < TWO_PI; a+=0.01){
    let xoff = map(16 * pow(sin(a+phase),3) + 1, -1, 1, 0, noiseMax) + 2;
    let yoff = map((-1) * 13 * cos(a+phase) - 5 * cos(2*a+phase) - 2 * cos(3*a+phase) - cos(4*a+phase) + 1, -1, 1, 0, noiseMax) + 2;
    let r = map(noise(xoff, yoff, zoff), 0, 1, 11, 14)       
    let x = r * 16 * pow(sin(a),3);
    let y = -r * (13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
    vertex(x,y)
  }
  endShape();
  beginShape();
  for(let a = 0; a < TWO_PI; a+=0.01){
    let xoff = map(16 * pow(sin(a+phase),3) + 1, -1, 1, 0, noiseMax) + 3;
    let yoff = map((-1) * 13 * cos(a+phase) - 5 * cos(2*a+phase) - 2 * cos(3*a+phase) - cos(4*a+phase) + 1, -1, 1, 0, noiseMax) + 3;
    let r = map(noise(xoff, yoff, zoff), 0, 1, 13.5, 16.5)       
    let x = r * 16 * pow(sin(a),3);
    let y = -r * (13 * cos(a) - 5 * cos(2*a) - 2 * cos(3*a) - cos(4*a));
    vertex(x,y)
  }
  endShape();
  zoff += zoffSpeed;
  phase += phaseSpeed;
}
