var PLAY = 1;
var END;
var gameState = PLAY;
var BananaGroup 
var score = 0;

function setup() {
  createCanvas(600,400);

  ground = new Ground();
  monkey = new Monkey();
  BananaGroup = new Group();
}

function draw() {
  background("black");  

  fill("white");
  text("score="+score, 100,100);

  if(gameState === PLAY){
    if(frameCount % 60 === 0){
      banana = new Banana();
      BananaGroup.add(banana.sprite);    
    }
    if(keyDown(RIGHT_ARROW)){
      monkey.sprite.velocityX = 3+frameCount/600;
    }
    if(keyDown(LEFT_ARROW)){
      monkey.sprite.velocityX = -3-frameCount/600;
    }
    for(var i=0;i<BananaGroup.length;i=i+1){
      var bananaSprite=BananaGroup.get(i);
      if(monkey.sprite.isTouching(bananaSprite)){
        bananaSprite.destroy();
        score = score+4;
      }
    }
    if(BananaGroup.isTouching(ground.sprite)){
      BananaGroup.destroyEach();
      score = score-2
    }
    if(score<0){
      gameState = END;
    }
  }

  if(gameState === END){
    monkey.sprite.velocityX = 0;
  }
  drawSprites();
}