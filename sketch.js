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
		textSize(20);
		fill(50,200,30);
		text("2D Side Scroller",100,100);
		fill(200,200,200);
		text("press q to play",200,200);
		
	}else if(sceneNum===1){
	background(51);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
	var force = createVector(-0.1,0);
  person.applyForce(force);
	}
	//translate(-person.pos.x,0);
    person.update();
  person.edges();
    person.display();
  fill(255,0,100);
  rect(400, height-50,50,50);
  }else{
	 background(50,100,200);
	 fill(130,100,30)
	 text("That is all folks",200,200);
	}
}	
