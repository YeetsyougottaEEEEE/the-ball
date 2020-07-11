var ball, ground1, didin, chain;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(width/2,670,width,20);
  didin = new dustbin(1200,650);
  chain = new slingshot(ball.body,{x:50,y:550});

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});
 
 
  
	Engine.run(engine);
	Render.run(render);
	
}


function draw() {
  rectMode(CENTER);
  background(230);

  ball.display();
  ground1.display();
  didin.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}


