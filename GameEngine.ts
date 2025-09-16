import { PLAYER_TAG, POSITION, Position, Renderable, RENDERABLE, VELOCITY, Velocity } from "./Components/Components"
import Entity from "./Entities/Entity"
import GameState from "./GameState"
import InputSystem from "./Systems/InputSystem"
import MovementSystem from "./Systems/MovementSystem"
import RenderSystem from "./Systems/RenderSystem"
import System from "./Systems/System"

export default class GameEngine {
  private ctx: CanvasRenderingContext2D
  private gameState: GameState
  private systems: System[] = []
  public inputSystem: InputSystem
  public movementSystem: MovementSystem
  public renderSystem: RenderSystem


  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx
    this.gameState = new GameState(new Map())
    this.systems.push(new InputSystem())
    this.systems.push(new MovementSystem(10))
    this.systems.push(new RenderSystem(ctx))
  }

  initGame() {
    this.gameState.addEntity(createDefaultPlayer())
  }

  update() {
    for (var system of this.systems) {
      system.update(this.gameState)
    }
  }
}

function createDefaultPlayer(): Entity {
  const player: Entity = new Entity()
  const positionComponent: Position = { x: 0, y: 0 }
  const velocityComponent: Velocity = { dx: 0, dy: 0 }
  const renderableComponent: Renderable = { width: 10, height: 10 }

  player.addComponent(POSITION, positionComponent)
  player.addComponent(VELOCITY, velocityComponent)
  player.addComponent(PLAYER_TAG, {})
  player.addComponent(RENDERABLE, { renderableComponent })
  return player
}
