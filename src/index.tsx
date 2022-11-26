import "./index.css";
import enemy1 from "./assets/imgs/enemy1.png";
import { canvas, ctx } from "./ui/canvas";

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 800);
const numberOfEnemies = 100;
const enemiesArray: Enemy[] = [];

let gameFrame = 0;

class Enemy {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private image = new Image();
  private frame: number;
  private flapSpeed = Math.floor(Math.random() * 3 + 1);

  constructor(
    // public speed = Math.random() * 4 - 2,
    private spriteWidth = 293,
    private spriteHeight = 155
  ) {
    this.image.src = enemy1;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;

    // Enemy position
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
  }

  update() {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;

    // Animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

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

  gameFrame++;
  // Game loop
  requestAnimationFrame(animate);
}

window.addEventListener("load", () => {
  document.body.appendChild(canvas);

  // Start Game loop
  animate();
});
