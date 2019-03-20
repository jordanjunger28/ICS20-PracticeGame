function Person() {
  this.pos = createVector(50, 250);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.mass = 10;
this.applyForce=function(force){
  this.acc.add(force);
}
  this.update = function() {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
 this.display = function() {
    fill(255, 150);
    stroke(255);
    rect(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
  this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= -0;
      this.pos.y = 250;
    }
  }
}
