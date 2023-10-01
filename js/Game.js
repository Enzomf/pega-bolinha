export default class Game { 

    static dificult = 'normal';
    static levels = {
        easy: 2000,
        normal: 1000,
        hard: 500,
    }

    ball = null;

    constructor(ball) {
        this.ball = ball;
    }

    async start () {
      
        const loop = async () => {

            this.ball.defineRandomPosition();
            this.ball.draw();
            console.log(Game.dificult);
            await new Promise((resolve) => {
                setTimeout(() => {
                    this.ball.destroy();
                    resolve();
                }, Game.levels[Game.dificult] );
            })

            await loop();
        }
      
        await loop();
    }


    static changeDificult(dificult) { 
        Game.dificult = dificult;

    }





}