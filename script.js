document.getElementById('startBtn').addEventListener('click', startGame);
const flashlight = document.getElementById('flashlight');
const monster = document.getElementById('monster');
const scream = document.getElementById('scream');
const player = document.getElementById('player');

let playerX = 50;
let playerY = 50;

function startGame() {
    document.getElementById('startBtn').style.display = 'none';
    flashlight.style.display = 'block';
    document.addEventListener('keydown', movePlayer);
    updateMonsterPosition();
}

function movePlayer(e) {
    switch(e.key) {
        case 'ArrowUp': playerY -= 10; break;
        case 'ArrowDown': playerY += 10; break;
        case 'ArrowLeft': playerX -= 10; break;
        case 'ArrowRight': playerX += 10; break;
    }
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
}

function updateMonsterPosition() {
    const dx = playerX - monster.offsetLeft;
    const dy = playerY - monster.offsetTop;
    const speed = 5;

    if (dx > 0) monster.style.left = (monster.offsetLeft + speed) + 'px';
    if (dx < 0) monster.style.left = (monster.offsetLeft - speed) + 'px';
    if (dy > 0) monster.style.top = (monster.offsetTop + speed) + 'px';
    if (dy < 0) monster.style.top = (monster.offsetTop - speed) + 'px';

    if (!monster.style.display) {
        monster.style.display = 'block';
        scream.currentTime = 0;
        scream.play();
    }

    requestAnimationFrame(updateMonsterPosition);
}

window.addEventListener('resize', () => {
    playerX = window.innerWidth / 2;
    playerY = window.innerHeight / 2;
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
});