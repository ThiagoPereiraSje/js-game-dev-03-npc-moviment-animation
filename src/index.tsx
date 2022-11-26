import "./index.css";
import enemy1 from "./assets/imgs/enemy1.png";
import enemy2 from "./assets/imgs/enemy2.png";
import enemy3 from "./assets/imgs/enemy3.png";
import { canvas, ctx } from "./ui/canvas";

import { Enemy } from "./classes/Enemy";
import { Enemy2 } from "./classes/Enemy2";
import { Enemy3 } from "./classes/Enemy3";

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 800);
const numberOfEnemies = 100;
const enemiesArray: Enemy[] = [];

let gameFrame = 0;

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy3(enemy3));
}

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArray.forEach((enemy) => {
    enemy.update(gameFrame);
    enemy.draw(ctx);
  });

  gameFrame++;
  // Game loop
  requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  document.body.appendChild(canvas);

  // Start Game loop
  animate();
});
