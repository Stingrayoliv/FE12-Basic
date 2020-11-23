function createMonster(imageUrl, canvas) {
    const monster = new GameObject(imageUrl);

    Object.assign(monster, MovableGameObjectPrototype);//монстр может двигаться
    monster.reset = function () {
        this.x = monster.image.width + Math.random() * (canvas.width - 3 * monster.image.width);
        this.y = monster.image.height + Math.random() * (canvas.height - 3 * monster.image.height);
        this.speed=0.5;
    }
    monster.reset();
    monster.update=function (delta){
        this.moveRight(delta);
        this.moveDown(delta);
    }
    return monster;
}
