import Game from "./Game.js";

const dificultSelect = document.querySelector("#dificult-select");

dificultSelect.addEventListener("change", (event) => {
    const selectedDifficulty = event.target.value;
    Game.changeDificult(selectedDifficulty);

    localStorage.setItem("selectedDifficulty", selectedDifficulty);
});
