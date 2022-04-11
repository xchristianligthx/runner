
var ground, invisibleGround, groundImage;
var trex, trex_running, trex_collided;

function preload() {

  

  
  
  groundImage = loadImage("sea.png")

  trex_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png" ,"ship-4.png");


 trex_collided = loadImage("ship-1.png");

  
}

function setup() {
createCanvas(2000, 2000);

  





trex = createSprite(200,350,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.3;
}

function draw() {
background("blue");




trex.x=World.mouseX;


drawSprites();
}
