import { Enemy } from "./Enemy";

export class Enemy4 extends Enemy {
  newX = Math.random() * gameProps.canvasWidth;
  newY = Math.random() * gameProps.canvasHeigth;
  interval = Math.floor(Math.random() * 200 + 50);

  constructor(image: any) {
    super(image);

    this.spriteWidth = 213;
    this.spriteHeight = 213;
  }

  update(gameFrame: number) {
    if (gameFrame % this.interval === 0) {
      this.newX = Math.random() * (gameProps.canvasWidth - this.width);
      this.newY = Math.random() * (gameProps.canvasHeigth - this.height);
    }

    const dx = this.x - this.newX;
    const dy = this.y - this.newY;

    this.x -= dx / 70;
    this.y -= dy / 70;

    // Animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
}
