import Ball from "./Ball.js";
import Game from "./Game.js";

const gameContainer = document.getElementById("game");
const ball = new Ball(gameContainer);
const game = new Game(ball);

// Recupere a dificuldade do localStorage.
const selectedDifficulty = localStorage.getItem("selectedDifficulty");

// Se a dificuldade estiver definida, configure-a no jogo.
if (selectedDifficulty) {
    Game.changeDificult(selectedDifficulty);
}

// Inicie o jogo aqui.
game.start();
