const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   

      dustbin1 = new dustbin (1029,380,290,20 );
      dustbin2= new dustbin (900,360,20,100 )
      dustbin3 = new dustbin (1180,360,20,100);


    paper1 = new paper ();

    

    ground = new Ground(600,height,1200,30);

    Engine.run(engine);
}

function draw(){
    background("lightgreen");

    
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    
    paper1.display()
    ground.display();

    if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2,y:-10});
	}
     

}