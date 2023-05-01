
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var leftWall,rightWall
var groundObj
var ball
var ball_options={
	isStatic:false,
	restitution:0.8,
	friction:0,
	density:1.2
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,20,30,ball_options)
	World.add(world,ball)

	groundObj=Bodies.rectangle(400,675,800,50,{isStatic:true})
	World.add(world,groundObj)
	Engine.run(engine);
	leftWall=Bodies.rectangle(600,600,20,120,{isStatic:true})
	World.add(world,leftWall)
	rightWall=Bodies.rectangle(750,600,20,120,{isStatic:true})
	World.add(world,rightWall)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
	ellipse(ball.position.x,ball.position.y,30)
	rect(groundObj.position.x,groundObj.position.y,800,50)
	rect(leftWall.position.x,leftWall.position.y,20,120)
	rect(rightWall.position.x,rightWall.position.y,20,120)


  drawSprites();
 
}

function keyPressed(){
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:100,y:100})
	}
}

