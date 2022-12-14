import "./index.css";
import enemy1 from "./assets/imgs/enemy1.png";
import enemy2 from "./assets/imgs/enemy2.png";
import enemy3 from "./assets/imgs/enemy3.png";
import enemy4 from "./assets/imgs/enemy4.png";

import { canvas, ctx } from "./ui/canvas";
import { controls } from "./ui/controls";

import { Enemy } from "./classes/Enemy";
import { Enemy2 } from "./classes/Enemy2";
import { Enemy3 } from "./classes/Enemy3";
import { Enemy4 } from "./classes/Enemy4";

globalThis.gameProps = {
  canvasWidth: (canvas.width = 500),
  canvasHeigth: (canvas.height = 800),
  sine: 90,
  cosine: 270,
  speed: 0,
};

const numberOfEnemies = 30;
const enemiesArray: Enemy[] = [];

let gameFrame = 0;

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy4(enemy4));
}

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, gameProps.canvasWidth, gameProps.canvasHeigth);

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
