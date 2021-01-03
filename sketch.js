const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot, boy;

function preload() {
    backgroundImg = loadImage("bg2.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,1200,20);  
    //1st mango
    platform = new Ground(1000, 105, 30, 1);
    pig1 = new Pig(1000, 105-5);
    //2nd mango
    pig2 = new Pig(750, 60-20);
    platform2 = new Ground(750, 60, 30, 1);
    //3rd mango
    pig3 = new Pig(750, 280-20);
    platform3 = new Ground(750, 280, 30, 1);
    //4th mango
    pig4 = new Pig(550, 70-20);
    platform4 = new Ground(550, 70, 30, 1);
    //5th mango
    platform5 = new Ground(950, 60, 30, 1);
    pig5 = new Pig(950, 60-20);
    // boy
    bird = new Bird(100,100);
    slingshot = new SlingShot(bird.body,{x:155, y:458});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    bird.display();
    slingshot.display();  
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}