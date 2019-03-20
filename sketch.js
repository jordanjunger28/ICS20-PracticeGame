var person = [];

function key() {
  
   person.applyForce(jump)
  }
}
function draw() {
  background(51);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0,1);
  person.applyForce(gravity);
  if(mouseIsPressed){
  var force = createVector(-0,1,0);
    
  }
}
