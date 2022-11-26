import "./index.css";
import { canvas, ctx } from "./ui/canvas";

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 800);
const numberOfEnemies = 100;
const enemiesArray: Enemy[] = [];

class Enemy {
  constructor(
    public x = Math.random() * canvas.width,
    public y = Math.random() * canvas.height,
    public width = 100,
    public height = 100,
    public speed = Math.random() * 4 - 2
  ) {}

  update() {
    this.x += this.speed;
    this.y += this.speed;
  }

  draw() {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

// const enemy1 = new Enemy();

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });

  // Game loop
  requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  document.body.appendChild(canvas);

  // Start Game loop
  animate();
});
