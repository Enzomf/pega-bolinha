export default class Ball {

    positionX = 0;
    positionY = 0;
    container = null;

    constructor(container) { 
        this.container = container;
    }

    changePosition(x, y){
        this.positionX = x;
        this.positionY = y;
    }

    defineRandomPosition(){ 
        const screenWidth = window.innerWidth - 100;
        const screenHeight = window.innerHeight - 100;


        const randomX = Math.floor(Math.random() * (screenWidth));
        const randomY = Math.floor(Math.random() * screenHeight );

        this.changePosition(randomX, randomY);
    }

    draw(){
        const ball = document.createElement('div');
        ball.id = 'ball';
        ball.style.left = this.positionX + 'px';
        ball.style.top = this.positionY + 'px';

        ball.addEventListener('dblclick', () => {
            this.hadleDoubleClick();
        })

        this.container.appendChild(ball);
    }

    destroy(){
        const ball = document.querySelector('#ball');
        ball.remove();
    }

    hadleDoubleClick(){
        window.alert('Parabéns! Você ganhou');
        window.location.href = '/'
    }


}