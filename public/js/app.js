import { Ball, createBalls } from "./ball";
import { EventHandler } from "./eventhandler";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;

const boxShadow = [
  "rgb(97, 218, 251) 0px 0px 150px", ////blue/////
  "rgb(65, 184, 131) 0px 0px 150px", //////////green/////
  "rgb(223, 176, 122) 0px 0px 150px", //////orange /////
  "rgb(221, 0, 49) 0px 0px 150px" /////red//////////
];
const backgroundColor = [
  "rgba(97, 218, 251,1)", ////blue/////
  "rgba(65, 184, 131,1)", //////////green/////
  "rgba(223, 176, 122,1)", //////orange /////
  "rgba(221, 0, 49,1)" /////red//////////
];

let numberOfBall = screenWidth / 8;
let ballArray = createBalls(numberOfBall, screenWidth, screenHeight);
let eventHandler = new EventHandler(ballArray, boxShadow, backgroundColor);

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
      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;
      canvas.width = screenWidth;
      canvas.height = screenHeight;
      numberOfBall = screenWidth / 8;
      ballArray = createBalls(numberOfBall, screenWidth, screenHeight);
      eventHandler = new EventHandler(ballArray, boxShadow, backgroundColor);
    }, 300)
  );
})();

(function backgroundAnimation() {
  ctx.clearRect(0, 0, screenWidth, screenHeight);
  ballArray.forEach(element => element.update());
  ballArray.forEach(element => element.draw(ctx));
  requestAnimationFrame(backgroundAnimation);
})();
