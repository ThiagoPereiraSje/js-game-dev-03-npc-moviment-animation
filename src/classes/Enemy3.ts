import { Enemy } from "./Enemy";

export class Enemy3 extends Enemy {
  angle = Math.random() * 100;
  angleSpeed = Math.random() * 0.8 + 0.2;

  constructor(image: any) {
    super(image);

    this.spriteWidth = 218;
    this.spriteHeight = 177;
  }

  update(gameFrame: number) {
    this.x =
      (gameProps.canvasWidth / 2) * Math.sin((this.angle * Math.PI) / 90) +
      (gameProps.canvasWidth / 2 - this.width / 2);

    // Geometric movement
    this.y =
      (gameProps.canvasHeigth / 2) * Math.cos((this.angle * Math.PI) / 270) +
      (gameProps.canvasHeigth / 2 - this.height / 2);

    this.angle += this.angleSpeed;

    if (this.x + this.width < 0) this.x = gameProps.canvasWidth;

    // Animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
}
