export class Enemy {
  constructor(x, y, speed, color = "red", health = 100) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.health = health;
    this.width = 20;
    this.height = 20;
  }

  update() {
    this.x += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
