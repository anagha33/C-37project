var canvas;
var gameState, contestantCount
var database, quiz, question
var contestant 

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");

  if(contestantCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}