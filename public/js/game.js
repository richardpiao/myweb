const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;

class Game {
  constructor(ballArr) {
    this.start = 0;
    this.gameover = 0;
    this.ballArr = ballArr;
  }
  init() {
    this.start = 0;
    this.gameover = 0;
  }
  isStart() {
    document.addEventListener("click", event => {
      if (this.start === 0 && this.gameover === 0) {
        this.start = 1;
        tick++;
        document.querySelector(".top-clock").innerHTML = tick;
        document.querySelector(".input-timer").value = tick;
        document.querySelector("nav").style.display = "none";
        document.body.style.cursor = "none";
        setInterval(() => {
          if (this.gameover === 0) {
            tick++;
            document.querySelector(".top-clock").innerHTML = tick;
            document.querySelector(".input-timer").value = tick;
          }
        }, 1000);

        this.ballArr.forEach(el => {
          el.speed.x = el.speed.x * 75;
          el.speed.y = el.speed.y * 75;
        });
      }
    });
  }
  collisionDetector() {
    if (this.gameover === 0) {
      ////////// move////////////////////
      document.addEventListener("mousemove", event => {
        let x = event.clientX;
        let y = event.clientY;
        if (this.start === 1 && this.gameover === 0) {
          document.querySelector(".ufo").style.left = `${x - 25}px`;
          document.querySelector(".ufo").style.top = `${y - 25}px`;
        }
      });
      /////////////collision////////////////
      this.ballArr.forEach(el => {
        let x = document.querySelector(".ufo").offsetLeft + 25;
        let y = document.querySelector(".ufo").offsetTop + 25;
        let distance = Math.sqrt(
          Math.pow(x - el.position.x, 2) + Math.pow(y - el.position.y, 2)
        );
        if (
          el.position.x - el.r <= 0 ||
          el.position.x + el.r >= window.innerWidth
        ) {
          el.speed.x = -el.speed.x;
        }
        if (
          el.position.y - el.r <= 0 ||
          el.position.y + el.r >= window.innerHeight
        ) {
          el.speed.y = -el.speed.y;
        }
        if (distance <= 28) {
          this.gameover = 1;
          el.color = "red";
          document.querySelector(".bottom-form").style.display = "flex";
          document.querySelector("nav").style.display = "block";
          document.body.style.cursor = "default";
        }
      });
    }
  }
}
class Ball {
  constructor(x, y) {
    this.position = {
      x: x,
      y: y
    };
    this.r = 1.5;
    this.speed = {
      x: (Math.random() - 0.5) / 10,
      y: (Math.random() - 0.5) / 10
    };

    this.color = "rgba(255,255,255,1)";
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.shadowColor = this.color;
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

function ball(int) {
  let balls = [];
  for (let i = 0; i < int / 8; i++) {
    let x = Math.random() * screenWidth;
    let y = Math.random() * 100;
    balls.push(new Ball(x, y));
  }
  for (let i = 0; i < int / 8; i++) {
    let x = Math.random() * screenWidth;
    let y = Math.random() * 100 + screenHeight - 100;
    balls.push(new Ball(x, y));
  }
  for (let i = 0; i < int / 8; i++) {
    let x = Math.random() * 100;
    let y = Math.random() * screenHeight;
    balls.push(new Ball(x, y));
  }
  for (let i = 0; i < int / 8; i++) {
    let x = Math.random() * 100 + screenWidth - 100;
    let y = Math.random() * screenHeight;
    balls.push(new Ball(x, y));
  }
  return balls;
}
var tick = 0;
let numberOfBall = screenWidth / 7;
let ballArr = ball(numberOfBall);
const game = new Game(ballArr);
const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};
(function resize() {
  window.addEventListener(
    "resize",
    debounce(() => {
      if (game.gameover === 0) {
        game.gameover = 1;
        document.querySelector(".top-clock").innerHTML =
          "Cannot resize during the game Please refresh to restart";
        document.querySelector(".top-clock").style.color = "#FFCC00";
      }
    }, 500)
  );
})();
(function() {
  game.init();
  game.isStart();
})();
(function backgroundAnimation() {
  game.collisionDetector();
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  ballArr.forEach(element => element.update());
  ballArr.forEach(element => element.draw(ctx));
  if (game.gameover === 0) {
    requestAnimationFrame(backgroundAnimation);
  }
})();
