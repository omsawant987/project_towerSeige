
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,600,300,10);
	ground2 = new Ground(1000,400,300,10);

	ground3 = new Ground(600,650,1200,10);

	box1 = new Box(1000,375,50,50);
	box2 = new Box(970,375,50,50);
	box3 = new Box(1030,375,50,50);
	box4 = new Box(940,375,50,50);
	box5 = new Box(1060,375,50,50);

	box6 = new Box(1000,325,50,50);
	box7 = new Box(970,325,50,50);
	box8 = new Box(1030,325,50,50);

	box9 = new Box(1000,275,50,50);
	box10 = new Box(970,275,50,50);
	box11 = new Box(1030,275,50,50);

	box12 = new Box(1000,225,50,50);
	box13 = new Box(1000,175,50,50);

	box14 = new Box(600,575,50,50);
	box15 = new Box(630,575,50,50);
	box16 = new Box(525,575,50,50);
	box17 = new Box(555,575,50,50);
	box18 = new Box(660,575,50,50);

	box19 = new Box(600,525,50,50);
	box20 = new Box(630,525,50,50);
	box21 = new Box(555,525,50,50);

	box22 = new Box(600,475,50,50);
	box23 = new Box(630,475,50,50);
	box24 = new Box(555,475,50,50);

	box25 = new Box(600,425,50,50);
	box26 = new Box(600,425,50,50);

	polygon = new Circle(100,500,40);

	slingshot = new SlingShot(polygon.body,{x:100,y:500})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  ground2.display();

  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();
  box26.display();

  polygon.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}



