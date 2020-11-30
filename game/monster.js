function createMonster(imageUrl, canvas) {
    const monster = new GameObject(imageUrl);

    Object.assign(monster, MovableGameObjectPrototype);

    monster.direction = 0;
    monster.movingTime = 0;

    monster.reset = function () {
        this.x = this.image.width + Math.random() * (canvas.width - 3 * this.image.width);
        this.y = this.image.height + Math.random() * (canvas.height - 3 * this.image.height);
    }

    monster.reset();


    monster.update = function (delta) {
        if (this.movingTime <= 0) {
            this.movingTime = Math.floor(Math.random() * 1000) + 100;
            this.speed = Math.floor(Math.random() * 5 + 0.05);
            this.direction = Math.round(Math.random() * 4 + 1)
        }

        switch (this.direction) {
            case 0:
                this.moveRight(delta);
                break;
            case 1:
                this.moveLeft(delta);
                break;
            case 2:
                this.moveUp(delta);
                break;
            case 3:
                this.moveDown(delta);
                break;
        }
        this.movingTime-=delta;
        /*
        1. Generate random number defines how much time monster will move.
        2. Generate random number defines a direction (up, down, left, right and their combinations)
        3. Generate random number defines monster's speed.
        4. Move monster for the defines period of time in (1)
        */
    }

    return monster;
}
