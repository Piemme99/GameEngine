import GameEngine from "./GameEngine";

const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")! as CanvasRenderingContext2D;

const gameEngine = new GameEngine(ctx)
gameEngine.initGame()


function mainLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  gameEngine.update()
  drawBlueSquare()
  window.requestAnimationFrame(mainLoop);
}

window.requestAnimationFrame(mainLoop);

/**
  * Just a small test method to draw a draw a square
  */
function drawBlueSquare() {
  ctx.fillStyle = "blue"
  ctx.fillRect(100, 100, 100, 100)
}
