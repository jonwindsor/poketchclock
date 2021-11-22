var landscape;

function preload() {
	landscape = loadImage('blueFace.png'); //Pokétch background preload
}

function setup() {
  createCanvas(1000, 700);
  angleMode(DEGREES);
}

function draw() {
	background(72, 136, 184);
  
  //Sets background to Pokétch outline
  background(landscape);
  translate(400, 340);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  
  //Clock face code inspired by Daniel Shiffman's Clock Coding Challenge sketch
  let secondAngle = map(sc, 0, 60, 0, 360);
  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  stroke(0);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
	
	//12:00
	stroke(16, 88, 96);
	fill(16, 88, 96);
	rect(215, 0, 22, 22);
	
	//1:00 
	stroke(32, 128, 136);
	fill(32, 128, 136);
	rect(184,120,22,22);
	
	//2:00 
	stroke(32, 128, 136);
	fill(32, 128, 136);
	rect(94,210,22,22);
	
	//3:00 
	stroke(16, 88, 96);
	fill(16, 88, 96);
	rect(-25,238,22,22);
	
	//4:00 
	stroke(32, 128, 136);
	fill(32, 128, 136);
	rect(-145,210, 22, 22);
	
	//5:00 
	stroke(32, 128, 136);
	fill(32, 128, 136);
	rect(-235,120, 22, 22);
	
	//6:00 
	stroke(16, 88, 96);
	fill(16, 88, 96);
	rect(-266, 0, 22, 22);
	
	//7:00
	stroke(32, 128, 136);
	fill(32, 128, 136);
	rect(-235,-115, 22, 22);
	
	//8:00
	stroke(32, 128, 136);
	fill(32, 128, 136);
	rect(-145,-200, 22, 22);
	
	//9:00 
	stroke(16, 88, 96);
	fill(16, 88, 96);
	rect(-26,-230,22,22);
	
	//10:00 
	stroke(32, 128, 136);
	fill(32, 128, 136);
	rect(94,-200,22,22);
	
	//11:00
	stroke(32, 128, 136);
	fill(32, 128, 136);
	rect(184,-113,22,22);
	
  //push and pop code inspired by Daniel Shiffman's Clock Coding Challenge sketch
  push();
  rotate(minuteAngle);
	strokeWeight(8);
  stroke(16, 88, 96);
  rect(0, 0, 129, 0);
  pop();

  push();
  rotate(hourAngle);
	strokeWeight(18);
  stroke(32, 128, 136);
  rect(0, 0, 80, 0);
  pop();
	
}
