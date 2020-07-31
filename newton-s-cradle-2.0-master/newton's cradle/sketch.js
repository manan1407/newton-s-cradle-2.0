
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	roof1 = new roof(400,250);
	bobObject1 = new bob(400,450);
	bobObject2 = new bob(350,450);
	bobObject3 = new bob(450,450);
	bobObject4 = new bob(500,450);
	bobObject5 = new bob(300,450);
	point1 = new point(350,250);
	point2 = new point(300,250);
	point3 = new point(450,250);
	point4 = new point(500,250);
	point5 = new point(400,250);
	chain1 = new rope(bobObject5.body,point2.body);
	chain2 = new rope(bobObject3.body,point3.body);
	chain3 = new rope(bobObject2.body,point1.body);
	chain4 = new rope(bobObject1.body,point5.body);
	chain5 = new rope(bobObject4.body,point4.body);
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("violet");
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  point1.display();
  point2.display();
  point3.display();
  point4.display();
  point5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}
function keyPressed (){
  if(keyCode === UP_ARROW){
    Body.applyForce(bobObject1.body,bobObject1.body.position,{x : -50,y : -45});
 }
}

