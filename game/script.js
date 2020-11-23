const canvas = document.createElement('canvas'); // создали элемент и задали параметры можно создать в HTML
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const background = new GameObject('images/background.png');
const hero = createHero('images/hero.png', canvas);
const monster = createMonster('images/monster.png', canvas);
const score=createScore();

const distanceBetweenTwoPoints = (x1, x2, y1, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
const keysPressed = {};

const ctx = canvas.getContext('2d') //(бываем 2d и 3d)// вывели canvas на экран

//еще один вариант запуска события
background.image.onload = () => ctx.drawImage(background.image, 0, 0); //onload() запускается таким образом, когда


window.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
    keysPressed[event.code] = true;
});
window.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
    delete keysPressed[event.code];
});

let before = Date.now(); // задаем до функции gameCycle
const gameCycle = function () {
    let now = Date.now();
    let time = now-before;

    hero.update(time);// объект должен сам себя update (в зависимостри от
    //состояния keysPressed) / S(V,t)=V*t;
    monster.update(time);
    if (distanceBetweenTwoPoints(hero.x, monster.x, hero.y, monster.y) < hero.image.width / 2 + monster.image.width / 2) {
        score.wins++;
        hero.reset();
        monster.reset();
        console.log("Hero caught Monster!!!")
    }
    background.render(ctx);
    hero.render(ctx);
    monster.render(ctx);
    score.render(ctx);//override
    window.requestAnimationFrame(gameCycle); //рекурсия

    before=now; // пересчет времени
}
window.requestAnimationFrame(gameCycle);
