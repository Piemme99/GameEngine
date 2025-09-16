import Entity from "./Entities/Entity";

export default class GameState {
  private entities: Map<number, Entity>;
  constructor(entities: Map<number, Entity>) {
    this.entities = entities
  }

  getAllEntities(): Entity[] {
    return Array.from(this.entities.values())
  }

  getEntitiesWithComponents(...components: string[]): Entity[] {

    var entitiesWithComponents: Entity[] = []
    for (var entity of this.entities.values()) {
      var hasAll: boolean = components.every(component => entity.hasComponent(component))
      if (hasAll) {
        entitiesWithComponents.push(entity)
      }
    }
    return entitiesWithComponents
  }
  addEntity(entity: Entity): void {
    this.entities.set(entity.id, entity)
  }
}
