function GameObject(imageUrl){
    this.x=0;
    this.y=0;
    this.ready=false;
    this.image=new Image();
    this.image.onload=()=>this.ready=true; // нужна стрелочная функция, чтобы переопределить this к event
    if (imageUrl){
        this.image.src=imageUrl;
    }
}
GameObject.prototype.render=function (ctx){//обобщающая функция для загрузки картинки, ctx-контекст
    if (this.ready) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}

const background = new GameObject('images/background.png');
const hero=new GameObject('images/hero.png');
const monster=new GameObject('images/monster.png');
const canvas=document.createElement('canvas'); // создали элемент и задали параметры можно создать в HTML
canvas.width=512;
canvas.height=480;
document.body.appendChild(canvas);
hero.x=canvas.width/2;
hero.y=canvas.height/2;

monster.x=monster.image.width+(Math.random()*(canvas.width-monster.image.width*3));
monster.y=monster.image.height+(Math.random()*(canvas.height-monster.image.height*3));

//еще один вариант запуска события
background.image.onload=()=>ctx.drawImage(background.image, 0, 0); //onload() запускается таким образом, когда
//происходит загрузка события
const ctx=canvas.getContext('2d') //(бываем 2d и 3d)// вывели canvas на экран
window.addEventListener('keydown', (event)=>{
    console.log(event);
    if (event.key==="ArrouUp"){
        hero.moveUp();
    }
    if (event.key==="ArrowDown"){
        hero.moveDown();
    }
    if (event.key==="ArrouRight"){
        hero.moveRight();
    }
    if (event.key==="ArrouLeft"){
        hero.moveLeft();
    }
});
window.addEventListener('keydown', (event)=>{
    console.log(event);
    hero.x+=1;
    hero.y+=1;
});


const gameCycle=function (){
    //console.log(gameCycle); // чтобы посмотреть
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
