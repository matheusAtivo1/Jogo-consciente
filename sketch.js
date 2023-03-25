
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var wall,wall1,wall2;
var world,engine;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);
  engine = Engine.create();
	world = engine.world;

var ball_options={
restitution:1,
friction:0,
density:1.2,
isStatic:false
}


	
	//Create the Bodies Here.
  wall=new Ground(600,400,1300,20);
  wall1=new Ground(1000,400,20,100);
  wall2=new Ground(1200,400,20,100);
	ball = Bodies.circle(250,250,30,ball_options)
	World.add(world,ball);
	
	Engine.run(engine);
  
}


function draw() {
  


  background(0);
  Engine.update(engine);
  rectMode(CENTER);
 
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:4,y:-4});
  }
  
  fill(256);
  ellipse(ball.position.x,ball.position.y,30);
  
  wall.display();
  wall1.display();
  wall2.display();
}



