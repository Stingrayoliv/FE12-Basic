function createHero(imageUrl, canvas) { // пример factory
    const hero = new GameObject();
    Object.assign(hero, MovableGameObjectPrototype); //assign-присваивает поля MovableGameObjectPrototype
//герою

    hero.reset=function (){
        hero.x = canvas.width / 2;
        hero.y = canvas.height / 2;
        this.speed = 0.1;
    }
    hero.reset();

    hero.update = function (delta) {
        if (keysPressed["ArrowUp"]) {
            this.moveUp(delta);
        }
        if (keysPressed["ArrowDown"]) {
            this.moveDown(delta);
        }
        if (keysPressed["ArrowRight"]) {
            this.moveRight(delta);
        }
        if (keysPressed["ArrowLeft"]) {
            this.moveLeft(delta);
        }
        if (keysPressed["ControlRight"]) {
            this.speedUp(delta);
        }
        if (keysPressed["ControlLeft"]) {
            this.speedDown(delta);
        }
    }
    return hero;
}