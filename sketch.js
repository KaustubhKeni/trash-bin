var ball,ball1;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var body,body1,body2;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	

	ball1=createSprite(width/2, 400,10,10);
	ball1.shapeColor=color("white")
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("orange")


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(width/2 , 100, 200 , { isStatic:true});
	World.add(world,ball);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
 
	body=new Block(700,640,10,120);
body1=new Block2(620,610,50,70);
body2=new Block2(780,610,50,70)





}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.position.x= ball.position.x 
  ball1.position.y= ball.position.y 
 
 body.display();
 body1.display();
 body2.display();
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(ball,false);
	//ball.position.x=650;
	//ball.position.y=610;
  }
}



