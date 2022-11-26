import { Enemy } from "./Enemy";

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 800;

export class Enemy3 extends Enemy {
  speed = Math.random() * 4 + 1;
  angle = Math.random() * 100;
  angleSpeed = Math.random() * 0.8 + 0.2;

  constructor(image: any) {
    super(image);

    this.spriteWidth = 218;
    this.spriteHeight = 177;
  }

  update(gameFrame: number) {
    this.x =
      (CANVAS_WIDTH / 2) * Math.sin((this.angle * Math.PI) / 90) +
      (CANVAS_WIDTH / 2 - this.width / 2);

    // Geometric movement
    this.y =
      (CANVAS_HEIGHT / 2) * Math.cos((this.angle * Math.PI) / 270) +
      (CANVAS_HEIGHT / 2 - this.height / 2);

    this.angle += this.angleSpeed;

    if (this.x + this.width < 0) this.x = CANVAS_WIDTH;

    // Animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
}
