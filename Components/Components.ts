export interface Position {
  x: number
  y: number
}
export const POSITION: string = "POSITION"

export interface Velocity {
  dx: number
  dy: number
}
export const VELOCITY: string = "VELOCITY"

export interface PlayerTag { }
export const PLAYER_TAG: string = "PLAYER_TAG"

export interface Renderable {
  width: number
  height: number
}
export const RENDERABLE: string = "RENDERABLE"
