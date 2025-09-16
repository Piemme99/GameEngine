import { POSITION, Position, VELOCITY, Velocity } from "../Components/Components";
import GameState from "../GameState";
import System from "./System";

export default class MovementSystem implements System {
  private deltaTime: number
  constructor(deltaTime: number) {
    this.deltaTime = deltaTime
  }
  update(gameState: GameState) {
    const entities = gameState.getEntitiesWithComponents(POSITION, VELOCITY);

    entities.forEach(entity => {
      const pos = entity.getComponent<Position>(POSITION)!;
      const vel = entity.getComponent<Velocity>(VELOCITY)!;

      pos.x += vel.dx * this.deltaTime;
      pos.y += vel.dy * this.deltaTime;
    });
  }
}
