let busto;
let map;
let rndclr;

function preload() {
  busto = loadModel('BUSTO_5.obj', true);
  map = loadImage('BUSTO_5.jpg');
  rndclr = random (1000);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //var cnv = createCanvas(300, 450, WEBGL);
  //debugMode();
  //background(0);
  //var x = (windowWidth - width) / 2;
  //var y = (windowHeight - height) / 2;
  //cnv.position(x, y);
}

function draw() {

  colorMode(HSB,1000);
  background(rndclr+frameCount%1000,1000,1000);

  colorMode(RGB);
 
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 0, 0, 0, 100, width/2);
  pointLight(0, 0, 250, -100, -100, height/2);
  pointLight(2500, 250, 250, 150, 150, height/2);
  ambientLight(150)
  //normalMaterial();
  texture(map);
  orbitControl(5,5,0.2);
  //rotateX(PI/6);
  //rotateY(-1);
 // rotateZ(PI);
  rotateX(PI);
  noStroke();
  
  for (let j = 0; j < 6; j+=3) {
    push();
    for (let i = 0; i < 10; i+=5) {
      translate(
        sin(frameCount * 0.001 + j) * 350,
        sin(frameCount * 0.01 + j) * -150,
        i * 0.1
      );
      rotateZ(frameCount * 0.001 + i);
      rotateX(frameCount * 0.004 + i);
      push();
      model(busto);
      pop();
    }
    pop();
  }
  model(busto);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
