const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1,box2;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

   
   box1= new Box(200,100,50,50);
   box2= new Box(240,300,50,80);
   ground= new Ground(350,370,600,15);
}
function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
}
