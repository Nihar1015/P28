
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg;
var treeImg;
var mango1, mango2, mango3, mango4, mango5;
var stone;
var sling;

function preload()
{
	boyImg = loadImage("Images/boy.png");
	treeImg = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,590, 1200, 10 );

	mango1 = new Mango(1000,350,30);
	mango2 = new Mango(800,300,30);
	mango3 = new Mango(860,310,30);
	mango4 = new Mango(1100,350,30);
	mango5 = new Mango(920,300,30);

	stone = new Stone(200,500,30);

	sling = new Slingshot(stone.body,{x:230,y:470});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  image(treeImg,700, 200,400,400);
  image(boyImg,200, 430, 220,220);

  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  sling.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:230, y: 470});
		sling.attach(stone.body);
	}

}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position


	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	console.log(distance);
	console.log(lmango.radius + lstone.radius);
		if(distance<=lmango.radius+lstone.radius)
		{
			console.log("hi");
			Matter.Body.setStatic(lmango.body,false);
		}

}

