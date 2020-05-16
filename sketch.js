const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var recta,cir,constr;

function setup() {
  createCanvas(800,400);

  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  cir = new circ(400, 200, 30);
  recta = new rectan(400, 50, 10, 10);

  constr = new Cons(cir.body, recta.x, recta.y );

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  cir.display();
  recta.display();
  constr.display();


}