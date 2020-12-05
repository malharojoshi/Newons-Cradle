const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
  box = new Box(400, 200, 400, 50);

  ball = new Ball(400, 500, 50);
  chain = new Chain(ball.body, box.body, 0, 0);
  ball2 = new Ball(500, 500, 50);
  chain2 = new Chain(ball2.body, box.body, 100, 0);
  ball3 = new Ball(300, 500, 50);
  chain3 = new Chain(ball3.body, box.body, -100, 0);
  ball4 = new Ball(600, 500, 50);
  chain4 = new Chain(ball4.body, box.body, 200, 0);
  ball5 = new Ball(200, 500, 50);
  chain5 = new Chain(ball5.body, box.body, -200, 0);
  Engine.run(engine);
}

function draw() {
  if (keyDown(38)) {
    Matter.Body.applyForce(ball4.body, ball4.body.position, { x: 100, y: 100 });
  }
  //rectMode(CENTER);
  background(200);
  Engine.update(engine);
  box.display();
  ball.display();
  chain.display();
  ball2.display();
  chain2.display();
  ball3.display();
  chain3.display();
  ball4.display();
  chain4.display();
  ball5.display();
  chain5.display();
}
