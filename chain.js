class Chain {
  constructor(bodyA, bodyB, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      pointB: { x: this.offsetX, y: this.offsetY },
      //length: 300,
    };
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
  }
  display() {
    strokeWeight(3);
    fill(0);
    line(
      this.chain.bodyA.position.x,
      this.chain.bodyA.position.y,
      this.chain.bodyB.position.x + this.offsetX,
      this.chain.bodyB.position.y + this.offsetY
    );
  }
}
