import { PLAYER_TAG, POSITION, VELOCITY, Velocity } from "../Components/Components";
import GameState from "../GameState";
import System from "./System";

export default class InputSystem implements System {
  private keys: Set<string> = new Set();

  constructor() {
    window.addEventListener("keydown", (e) => this.keys.add(e.key));
    window.addEventListener("keyup", (e) => this.keys.delete(e.key));
  }

  update(state: GameState): void {
    const entities = state.getEntitiesWithComponents(POSITION, VELOCITY, PLAYER_TAG);
    const allEntities = state.getAllEntities()


    for (const entity of entities) {
      const velocity = entity.getComponent<Velocity>(VELOCITY)!;

      velocity.dx = 0;
      velocity.dy = 0;

      if (this.keys.has("ArrowUp") || this.keys.has("z")) velocity.dy = -1;
      if (this.keys.has("ArrowDown") || this.keys.has("s")) velocity.dy = 1;
      if (this.keys.has("ArrowLeft") || this.keys.has("q")) velocity.dx = -1;
      if (this.keys.has("ArrowRight") || this.keys.has("d")) velocity.dx = 1;
    }
  }
}
