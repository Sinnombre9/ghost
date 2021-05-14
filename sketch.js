var tower, towerImg;
var ghost, ghostImg;
var doorImg;
var climberImg;
var groupinvisible;
var invisiblegr;
var vantanagr;
var spooky;
function preload (){
 towerImg=loadImage("tower.png");
  ghostImg=loadImage("ghost-standing.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  spooky=loadSound("spooky.wav");
}
function setup(){
  createCanvas(400, 600);
  tower=createSprite(200,300,20,20);
  tower.addImage("torre", towerImg);
  tower.scale=0.7
  grupoinvisible=new Group();
  invisiblegr=new Group();
  ventanagr=new Group();
  ghost=createSprite(300,320,20,20);
  ghost.addAnimation("fantasma", ghostImg);
  ghost.scale=0.4
  gameState="START";
  
  }
function draw(){
  background(0);
  drawSprites();
 spooky.play();
 if(gameState==="START"&keyDown("space")){
   gameState="PLAY"
 }
  if(gameState==="PLAY"){
     tower.velocityY=3
      if (tower.y >400) {
        tower.y = tower.height / 4;
           
      }
    if(ghost.isTouching(grupoinvisible)){
      ghost.velocityY=0;
    }
    if(ghost.isTouching(invisiblegr)){
      gameState="END";
    }
    door();
    ghost.velocityY=ghost.velocityY+0.5;
    if(keyDown("right_arrow")){
      ghost.x=ghost.x+5;
    }
    if(keyDown("left_arrow")){
      ghost.x=ghost.x-5;
    }    
      if(keyDown("space")){
        ghost.velocityY=-3;
     }
  }
    console.log(tower.height);
  if(gameState==="END"){
     tower.velocityY=0;
    invisiblegr.setVelocityYEach(0);
    grupoinvisible.setVelocityYEach(0);
    ventanagr.setVelocityYEach(0);
    ghost.velocityY=2;
     }
}
function door(){
  if(frameCount%70===0){
    var door=createSprite(random(50,350),0,20,20);
    door.addImage("door", doorImg);
    door.velocityY=3;     
    door.scale=0.7;
    var climber=createSprite(door.x,50,20,20);
    climber.addImage("climber", climberImg);
    climber.velocityY=3;
    climber.scale=0.7;
  door.depth=ghost.depth;
  climber.depth=ghost.depth;
    ghost.depth=ghost.depth+1
    ventanagr.add(door);
    ventanagr.add(climber);
    var invisible=createSprite(climber.x,42,60,10);
    invisible.velocityY=3;
    grupoinvisible.add(invisible);
    var invisible2=createSprite(climber.x,56,60,10);
    invisible2.velocityY=3;
    invisiblegr.add(invisible2);
    invisible.visible=false;
    invisible2.visible=false;
  }
}
