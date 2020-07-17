var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(35,20);

	bob1 = new Bob(300,235);
	bob2 = new Bob(350,235);
	bob3 = new Bob(400,235);
	bob4 = new Bob(450,235);
	bob5 = new Bob(500,235);

	bobDiameter = bob1.radius*2;

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
}


function draw() {
	background(0);
	
	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0});
	}
}



