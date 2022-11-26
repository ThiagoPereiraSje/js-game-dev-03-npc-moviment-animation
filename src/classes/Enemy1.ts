const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 800;

export class Enemy1 {
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private image = new Image();
  private frame: number;
  private flapSpeed = Math.floor(Math.random() * 3 + 1);

  constructor(
    // public speed = Math.random() * 4 - 2,
    image: any,
    private spriteWidth = 293,
    private spriteHeight = 155
  ) {
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
