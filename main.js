import { FastEnemy } from "./game/FastEnemy.js";
import { TankEnemy } from "./game/TankEnemy.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const enemies = [
  new FastEnemy(0, 100),
  new TankEnemy(0, 150)
];

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let enemy of enemies) {
    enemy.update();
    enemy.draw(ctx);
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
