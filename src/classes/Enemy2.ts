import { Enemy } from "./Enemy";

const CANVAS_WIDTH = 500;

export class Enemy2 extends Enemy {
  speed = Math.random() * 4 + 1;
  angle = 0;
  angleSpeed = Math.random() * 0.2;
  curve = Math.random() * 7;

  constructor(image: any) {
    super(image);

    this.spriteWidth = 266;
    this.spriteHeight = 188;
  }

  update(gameFrame: number) {
    this.x -= this.speed;

    // Wave moviment
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;

    if (this.x + this.width < 0) this.x = CANVAS_WIDTH;

    // Animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
}
