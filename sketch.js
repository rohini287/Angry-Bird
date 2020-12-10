const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,330,70,70);
    box2 = new Box(700,330,70,70);
    //box3 = new Box(500,170,70,70);
    box3 = new Box(500,170,70,70); 
    box4 = new Box(700,170,70,70);
    box5= new Box(600,100,70,70);
    pig1 = new Pig(600,330);
    pig2 = new Pig(600,170)
    ground = new Ground(400,height,800,20)
    log1 = new Log(600,280,280,PI/2);
    log2 = new Log(600,120,280,PI/2)
    log3 = new Log(550,80,150,PI/5);
    log4 = new Log(650,80,150,-PI/5)
    bird1= new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}