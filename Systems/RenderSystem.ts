import { POSITION, Position, RENDERABLE } from "../Components/Components";
import GameState from "../GameState";
import System from "./System";

export default class RenderSystem implements System {
  private ctx: CanvasRenderingContext2D
  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
  }
  update(gameState: GameState) {
    var entities = gameState.getEntitiesWithComponents(POSITION, RENDERABLE)
    for (var entity of entities) {
      const position = entity.getComponent<Position>(POSITION)!
      this.ctx.strokeStyle = "red"
      this.ctx.beginPath()
      this.ctx.arc(position.x, position.y, 10, 0, 2 * Math.PI)
      this.ctx.stroke()
    }
  }
}
