
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var bp1, bp2, bp3;




function setup() {
  createCanvas(800, 700);
  


	engine = Engine.create();
	world = engine.world;

  ball = new Paper(100, 590, 20);
  ground = new Ground(400, 610, 800, 10);
  bp1 = new Dustbin(600, 600, 170, 10);
  bp2 = new Dustbin2(515, 500, 10, 200);
  bp3 = new Dustbin3(685, 500, 10, 200);
	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(180);
  Engine.update(engine);

  

  ball.display();
  ground.display();
  bp1.display();
  bp2.display();
  bp3.display();
  
  drawSprites();
 
}



