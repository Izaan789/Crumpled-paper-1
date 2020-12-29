
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 623);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(240,300,20);
    ground1 = new Ground(650,600,3000,8)
	
	edge1 = new Dustbin(1075,530,100,PI/1)
    edge2 = new Dustbin(845,530,100,PI/1)
	edge3 = new Dustbin(960,585,250,PI/2)
}


function draw() {
 background(0);
 Engine.update(engine) 


 
  paper1.display();
  ground1.display();
  edge1.display();
  edge2.display();
  edge3.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.position,{x:0.06,y:-0.06})
	}
}



