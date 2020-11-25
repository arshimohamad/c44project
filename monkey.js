class Monkey{
    constructor(){
        this.sprite=createSprite(100,325,20,50);
        this.image = loadImage("monkey.png");
        this.sprite.addImage(this.image);
        this.sprite.scale=0.4;

    }
}