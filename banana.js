class Banana{
    constructor(){
        this.sprite=createSprite(random(5,550),0,20,50);
        this.image = loadImage("banana.png");
        this.sprite.addImage(this.image);
        this.sprite.scale = 0.05;
        this.sprite.velocityY = 3+frameCount/600;
    }
}