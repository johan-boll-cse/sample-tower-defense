const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let enemy = {
  x: 0,
  y: 280,
  width: 20,
  height: 20,
  speed: 1
};

function drawEnemy() {
  ctx.fillStyle = "red";
  ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

function update() {
  enemy.x += enemy.speed;
  if (enemy.x > canvas.width) {
    enemy.x = 0; // reset to start
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  update();
  drawEnemy();
  requestAnimationFrame(gameLoop);
}

gameLoop();
