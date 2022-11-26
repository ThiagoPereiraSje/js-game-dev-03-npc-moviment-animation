const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 800;

export class Enemy {
  x: number;
  y: number;
  width: number;
  height: number;
  image = new Image();
  spriteWidth = 293;
  spriteHeight = 155;
  frame: number;
  flapSpeed = Math.floor(Math.random() * 3 + 1);

  constructor(image: any) {
    this.image.src = image;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;

    // Enemy position
    this.x = Math.random() * (CANVAS_WIDTH - this.width);
    this.y = Math.random() * (CANVAS_HEIGHT - this.height);
  }

  update(gameFrame: number) {
    // First movement pattern
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;

    // Animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
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
