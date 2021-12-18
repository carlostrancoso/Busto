let busto;
let map;

function preload() {
  busto = loadModel('BUSTO_15_GU.obj', true);
  map = loadImage('Busto 15_LO.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //var cnv = createCanvas(300, 450, WEBGL);
  //debugMode();
  //background(7);
  //var x = (windowWidth - width) / 2;
  //var y = (windowHeight - height) / 2;
  //cnv.position(x, y);
}

function draw() {
  background(255);
 
  //let locX = mouseX - width / 2;
  //let locY = mouseY - height / 2;
  pointLight(250, 0, 0, 0, 100, width/2);
  pointLight(0, 0, 250, -100, -100, height/2);
  pointLight(2500, 250, 250, 150, 150, height/2);
  //normalMaterial();
  texture(map);
  orbitControl(5,5,0.2);
  //rotateX(PI/6);
  //rotateY(-1);
 // rotateZ(PI);
  noStroke();
  
  for (let j = 0; j < 6; j+=3) {
    push();
    for (let i = 0; i < 80; i+=5) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.01 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      model(busto);
      pop();
    }
    pop();
  }
  
  
}
