
var position,database
var form, player,game
var playerCount
var gameState=0
var allPlayers
var car1,car2,car3,car4,cars;

function setup(){
database=firebase.database();
    createCanvas(displayWidth,displayHeight);
    game=new Game();
    game.getState()
    game.start()

   
} 

function draw(){
    background("white");
  if(playerCount===4){
game.update(1)
  }
  if(gameState===1){
clear();
game.play();
  }
    drawSprites();
}


