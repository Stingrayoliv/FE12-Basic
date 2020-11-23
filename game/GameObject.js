function GameObject(imageUrl) {
    this.x = 0;
    this.y = 0;
    this.ready = false;
    this.image = new Image();
    this.image.onload = () => this.ready = true; // нужна стрелочная функция, чтобы переопределить this к event
    if (imageUrl) {
        this.image.src = imageUrl;
    }
}

GameObject.prototype.render = function (ctx) {//обобщающая функция для загрузки картинки, ctx-контекст
    if (this.ready) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}

const MovableGameObjectPrototype = {
    speed: 0,
    moveUp: function (delta) {
        this.y = this.y - this.speed*delta; //S=V*t
        if (this.y < 0) {
            this.y = canvas.height - this.y;
        }
    },
    moveDown: function (delta) {
        this.y = this.y % canvas.height + this.speed*delta;
    },
    moveLeft: function (delta) {
        this.x = canvas.width - this.speed*delta;
        if (this.x < 0) {
            this.x = canvas.width - this.x;
        }
    },
    moveRight: function (delta) {
        this.x = this.x % canvas.width + this.speed*delta;
    },
    speedUp: function () {
        this.speed += 0.1;
    },
    speedDown: function () {
        if (this.speed > 1)//скорость не может быть отрицательной
            this.speed -= 1;
    }
}