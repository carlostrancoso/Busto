let busto;
let map;

function preload() {
  busto = loadModel('BUSTO_15_GU.obj', true);
  map = loadImage('Busto 15_LO.jpg');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);
  //debugMode();
  background(7);
}

function draw() {
  //background(7);
 
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 0, 0, locX, locY, width/2);
  pointLight(0, 0, 250, locX*-1, locY*-1, height/2);
  pointLight(2500, 250, 250, locX*1.2, locY*1.2, height/2);
  //normalMaterial();
  texture(map);
  orbitControl(5,5,0.5);
  rotateX(PI/6);
  //rotateY(-1);
  rotateZ(PI);
  noStroke();
  model(busto);
  
}