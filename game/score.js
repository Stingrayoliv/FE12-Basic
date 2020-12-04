function createScore() {
    const score = new GameObject();
    score.x = 32;
    score.y = 32;
    score.wins = 0;
    score.timeToEnd = 5 * 1000;// чтобы в мили сек было
    score.isGameOver = false;
    score.update = function (delta) {
        if (score.timeToEnd <= 0) {
            this.isGameOver = true;
            this.timeToEnd = 0;
        } else {
            score.timeToEnd -= delta;
        }
    }

    score.render = function (ctx) {
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        if(this.isGameOver){
            ctx.fillText("The game is over! Your score: " + score.wins, 150, 200);
        }else{
            ctx.fillText("Monsters caught:" + this.wins, this.x, this.y);
            ctx.fillText("Seconds left: " + Math.floor(this.timeToEnd / 1000), this.x + 250, this.y);
        }
    }
    return score;
}
