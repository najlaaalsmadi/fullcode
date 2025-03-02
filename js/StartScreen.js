const games = [
    { name: "", image: "img/DZhNT0he.svg", url: "oneGame.html" },
    {name: "", image: "img/background.jpg ", url: "SavetheWater/indexgame.html" },
    { name: "", image: "img/icon2.png", url: "GodotGame/GodotIndex.html" },
    { name: "", image: "img/game4/17.png", url: "ElectricitySavingGame/ElectricityIndex.html" }
];

const gameListContainer = document.getElementById("game-list");
const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

games.forEach(game => {
    const button = document.createElement("button");
    button.className = "game-button";
    button.style.backgroundImage = `url(${game.image})`;
    button.style.backgroundSize = "cover";
    button.style.backgroundPosition = "center";
    button.textContent = game.name;
    button.onclick = () => window.location.href = game.url;
    gridContainer.appendChild(button);
});

gameListContainer.appendChild(gridContainer);

setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
}, 2000);