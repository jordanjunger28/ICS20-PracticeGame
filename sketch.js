var person;
var sceneNum=0;

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,-5);
    person.applyForce(jump);
    person.count();
  } else if (key=='q'){
    sceneNum++;
  }
}

function draw() {
  
  if(sceneNum===0){
    background(200,50,50);
    textSize(30);
    fill(50,200,30);
    
    background(200,30,37)
		text("2D Side Scroller",100,100);
    fill(200,200,200);
    textSize(18);
    text("press q to play", 10,350);
    
  }else if(sceneNum===1){
  background(51,100,100);
  translate(-person.pos.x+100,0);
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
  fill(300,10,150);
  rect(300, height-150,50,50);
  }else{
    background(80,100,200);
    fill(130,1,13);
    textSize(50);
    strokeWeight(10);
    text("That is all folks!",50,200);
  }
}
