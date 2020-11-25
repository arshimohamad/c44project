class Ground{
    constructor(){
        this.sprite=createSprite(width/2,height-20,1600,20);
        this.sprite.shapeColor=color("#794727")
    }
    move(){
        this.sprite.velocityX=-2;
        if(this.sprite.x<0){
            this.sprite.x = this.sprite.width/2;
        }
    }
    stop(){
        this.sprite.velocityX=0;
    }
}