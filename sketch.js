const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Background;
var bird;

//foundation
var brick1,brick2,brick3,brick4;
var log1;

//tower 1 base
var brick5,smallblock1;
var brick6,smallblock2;

//tower 2 base
var brick7,smallblock3;
var brick8,smallblock4;

//tower1
var log2,log3;
var brick9;

var log6;

var brick11,brick12;

var log8;

var brick15;

var brick17;

//tower2
var log4,log5;
var brick10;

var log7;

var brick13,brick14;

var log9;

var brick16;

var brick18;



//pigs
var pig1,pig2,pig3;

function preload(){
    Background = loadImage("sprites/backdrop.jpg");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(0,0,30,30);
    ground = new Ground(600,480,1200,20);

    //foundation
    brick1 = new Brick(700,460,75,35,0,2);
    brick2 = new Brick(775,460,75,35,0,2);
    brick3 = new Brick(975,460,75,35,0,2);
    brick4 = new Brick(1050,460,75,35,0,2);
    log1 = new Log(875,440,165,PI/2);

    //tower 1 base
    brick5 = new Brick(715,440,75,35,0,1);
    smallblock1 = new SmallBLock(775,440,43,35,1);

    brick6 = new Brick(760,420,75,35,0,1);
    smallblock2 = new SmallBLock(700,420,43,35,1);


    //tower 2 base
    brick7 = new Brick(995,440,75,35,0,1);
    smallblock3 = new SmallBLock(1055,440,43,35,1);

    brick8 = new Brick(1040,420,75,35,0,1);
    smallblock4 = new SmallBLock(980,420,43,35,1);

    //tower1
    log2 = new Log(700,328,75,0);
    log3 = new Log(780,328,75,0);

    brick9 = new Brick(740,328,75,35,PI/2,2);

    log6 = new Log(735,280,150,PI/2);

    brick11 = new Brick(680,235,75,35,PI/2,1);
    brick12 = new Brick(790,235,75,35,PI/2,1);

    log8 = new Log(740,180,150,PI/2);

    brick15 = new Brick(740,155,75,35,0,3);

    brick17 = new Brick(740,50,75,20,PI/2,3);

    pig1 = new Pig(740,235,30,30);


    //tower2
    log4 = new Log(980,328,75,0);
    log5 = new Log(1060,328,75,0);

    brick10 = new Brick(1020,328,75,35,PI/2,2);

    log7 = new Log(1020,280,150,PI/2);

    brick13 = new Brick(965,235,75,35,PI/2,1);
    brick14 = new Brick(1070,235,75,35,PI/2,1);

    log9 = new Log(1020,188,150,PI/2);

    brick16 = new Brick(1020,161,75,35,0,3);

    brick18 = new Brick(1020,50,75,20,PI/2,3);

    pig2 = new Pig(1020,235,30,30);

    pig3 = new Pig(875,400,50,50);

}

function draw(){
    background(Background);
    Engine.update(engine);
    bird.display();
    pig1.display();
    pig2.display();
    pig3.display();
    console.log(brick15.body.position.y);

    //foundation    
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    log1.display();

    //tower 1 base
    brick5.display();
    smallblock1.display();

    brick6.display();
    smallblock2.display();

    //tower 2 base
    brick7.display();
    smallblock3.display();

    brick8.display();
    smallblock4.display();

    //tower1
    log2.display();
    log3.display();

    brick9.display();

    log6.display();

    brick11.display();
    brick12.display();

    log8.display();

    brick15.display();

    brick17.display();




    //tower2
    log4.display();
    log5.display();

    brick10.display();

    log7.display();

    brick13.display();
    brick14.display();

    log9.display();

    brick16.display();

    brick18.display();
}