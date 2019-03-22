function Person() {
  this.pos = createVector(100, 250);
  this.vel = createVector(1, 2);
  this.acc = createVector(1, 2);
  this.mass = 10;
  this.applyForce = function(force) {
    this.acc.add(force);
  background(20,15,200);
	}
	
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.display = function() {
    fill(300, 150);
    stroke(200);
    rect(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
   text(" Jump over rectangle to score a point);
	
				{	
		this.edges = function() {
    if (this.pos.y > 250) {
      this.vel.y *= 0;
      this.pos.y = 250;
    
