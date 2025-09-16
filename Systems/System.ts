import GameState from "../GameState";

export default interface System {
  update(gameState: GameState): void
}
