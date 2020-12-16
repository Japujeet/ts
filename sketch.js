const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg = "b11.png";
var score = 0;

function preload() {
    getBKGRNDIMG();
}


function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,700,800,20);
    ground2 = new Ground(300,400,200,20);
    ground3 = new Ground(600,300,150,20);

    box_1 = new Box(300,380,30,30);
    box_2 = new Box(270,380,30,30);
    box_3 = new Box(240,380,30,30);
    box_4 = new Box(330,380,30,30);
    box_5 = new Box(360,380,30,30);
    box_6 = new Box(300,345,30,30);
    box_7 = new Box(270,345,30,30);
    box_8 = new Box(330,345,30,30);
    box_9 = new Box(300,310,30,30);
    box_10= new Box(600,280,30,30);
    box_11= new Box(600,245,30,30);
    box_12= new Box(570,280,30,30);
    box_13= new Box(630,280,30,30);
    
    polygon_1 = new Poly(100,300);
   
    sling1 = new SlingShot(polygon_1.body,{x:100,y:300});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
        }

    Engine.update(engine);
   strokeWeight(3);
   stroke("black");
   fill("white");
    text("S C O R E  :  "+ score,700,50);    

    ground1.display();
    ground2.display();
    ground3.display();

    box_1.display();
    box_2.display();
    box_3.display();
    box_4.display();
    box_5.display();
    box_6.display();
    box_7.display();
    box_8.display();
    box_9.display();
    box_10.display();
    box_11.display();
    box_12.display();
    box_13.display();
   
    box_1.score();
    box_2.score();
    box_3.score();
    box_4.score();
    box_5.score();
    box_6.score();
    box_7.score();
    box_8.score();
    box_9.score();
    box_10.score();
    box_11.score();
    box_12.score();
    box_13.score();
    
    sling1.display();

    polygon_1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon_1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
        
        Matter.Body.setPosition(polygon_1.body,{x:100,y:300});
        sling1.attach(polygon_1.body);
       
    }
}

async function getBKGRNDIMG(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    
    var dateTime=responseJSON.datetime;
    
    var hr=dateTime.slice(11,13);
    
    if(hr>=06 && hr<=18){
        bg="b11.png"
    }
    else{
        bg="scenery.png"
    }
    backgroundImg=loadImage(bg);

    
}

