export class Ball {
  constructor(screenWidth, screenHeight) {
    this.position = {
      x: Math.random() * screenWidth,
      y: Math.random() * screenHeight
    };
    this.r = 0.5;
    this.speed = {
      x: (Math.random() - 0.5) / 10,
      y: (Math.random() - 0.5) / 10
    };
    this.shadowBlur = 3;
    this.color = "rgba(255,255,255,1)";
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.shadowColor = this.color;
    ctx.shadowBlur = this.shadowBlur;
    ctx.fillStyle = this.color;
    ctx.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}
export function createBalls(int, screenWidth, screenHeight) {
  let balls = [];
  for (let i = 0; i < int; i++) {
    balls.push(new Ball(screenWidth, screenHeight));
  }
  return balls;
}
