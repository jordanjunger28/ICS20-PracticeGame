var person;
var sceneNum=0

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,-5);
    person.applyForce(jump);
	} else if(key=='q'){
    sceneNum++;
	}
}		

function draw() {
  
	if (sceneNum===0){
		background(50,100,200)
		textSize(30);
	  fill(50,200,30);
		text("2D Side Scroller",90,90);
		textSize(30);
		fill(15,200,200);
		text("press q to play",200,200);
		
	
	}else if(sceneNum===1){
	background(50);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
	var force = createVector(-0.1,0);
  person.applyForce(force);
	}
	//translate(-person.pos.x,0);
   background(30,100,200)
		person.update();
  person.edges();
    person.display();
   fill(255,30,100);
  rect(500, height-18,100,80);
  }else{
	 background(50,150,250);
	 fill(50,100,200)
	 background(30,100,250);
		text("That is all folks",180,180);
	 }
}
