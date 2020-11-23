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

const background = new GameObject('images/background.png');
const hero = new GameObject('images/hero.png');
const monster = new GameObject('images/monster.png');
const canvas = document.createElement('canvas'); // создали элемент и задали параметры можно создать в HTML
canvas.width = 512;
canvas.height = 480;

document.body.appendChild(canvas);

hero.x = canvas.width / 2;
hero.y = canvas.height / 2;


const keysPressed = {};

const MovableGameObjectPrototype = {
    speed: 0,
    moveUp: function () {
        this.y = this.y - this.speed;
        if (this.y < 0) {
            this.y = canvas.height - this.y;
        }
    },
    moveDown: function () {
        this.y = this.y % canvas.height + this.speed;
    },
    moveLeft: function () {
        this.x = canvas.width - this.speed;
        if (this.x < 0) {
            this.x = canvas.width - this.x;
        }
    },
    moveRight: function () {
        this.x = this.x % canvas.width + this.speed;
    },
    speedUp: function () {
        this.speed += 1;
    },
    speedDown: function () {
        if (this.speed > 1)//скорость не может быть отрицательной
            this.speed -= 1;
    },
    updatePosition: function () {
        if (keysPressed["ArrowUp"]) {
            hero.moveUp();
        }
        if (keysPressed["ArrowDown"]) {
            hero.moveDown();
        }

        if (keysPressed["ArrowRight"]) {
            hero.moveRight();
        }

        if (keysPressed["ArrowLeft"]) {
            hero.moveLeft();
        }
    },
    updateSpeed: function () {
        if (keysPressed["ControlRight"]) {
            hero.speedUp();
        }
        if (keysPressed["ControlLeft"]) {
            hero.speedDown();
        }
    }
}
Object.assign(hero, MovableGameObjectPrototype); //assign-присваивает поля MovableGameObjectPrototype
//герою

const distanceBetweenTwoPoints = (x1, x2, y1, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

hero.update = function () {
    hero.updatePosition();
    hero.updateSpeed();
}
hero.speed = 1;

monster.x = monster.image.width + (Math.random() * (canvas.width - 3 * monster.image.width));
monster.y = monster.image.height + (Math.random() * (canvas.height - monster.image.height * 3));

//еще один вариант запуска события
background.image.onload = () => ctx.drawImage(background.image, 0, 0); //onload() запускается таким образом, когда
//происходит загрузка события
const ctx = canvas.getContext('2d') //(бываем 2d и 3d)// вывели canvas на экран

window.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    keysPressed[event.code] = true;
});
window.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
    delete keysPressed[event.code];
});


const gameCycle = function () {
    hero.update();// объект должен сам себя update (в зависимостри от
    //состояния keysPressed
    //console.log(gameCycle); // чтобы посмотреть
    if (distanceBetweenTwoPoints(hero.x, monster.x, hero.y, monster.y)<hero.image.width/2+monster.image.width/2){
        console.log("Hero caught Monster!!!")
    }
        background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);
    window.requestAnimationFrame(gameCycle); //рекурсия
}

window.requestAnimationFrame(gameCycle);
// setTimeout(()=>{
//     background.render(ctx);
//     hero.render(ctx);
//     monster.render(ctx);
// }, 1500);
